import React, { useState } from 'react'
import axios from 'axios'
import { useAsyncEffect } from '../tools'
import Control from './control'
import SearchBar from './search'
import TableCom from './table'
import { Container, SocketTumbler } from './widget.style'

const AVAILABLE_MODE = {
  BTC: 'BTC',
}

export type WidgetProps = {
  value?: any
  hasError?: boolean
  disabled?: boolean
  required?: boolean
  textarea?: boolean
  maxlength?: number
  number?: boolean
  fontSize?: string
  annotation?: string
  errorText?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent) => void
}

const socket = new WebSocket('wss://stream.binance.com/stream?streams=!miniTicker@arr')

const Widget: React.FC<WidgetProps> = () => {
  const [widgetData, setWidgetData] = useState({})
  const [mode, setMode] = useState(AVAILABLE_MODE['BTC'])
  const [subMode, setSubMode] = useState('change')
  const [socketState, setSocketState] = useState(socket)

  const filterByCurrentMode = (data: any) => {
    return Object.entries(data).reduce((accum: any, item: any) => {
      const currentItemValue = item[1]

      const isSocket = typeof currentItemValue.c === 'string'

      if (isSocket ? currentItemValue.s.indexOf(mode) > 0 : currentItemValue.q === mode) {
        return [
          ...accum,
          {
            pair: currentItemValue.b
              ? `${currentItemValue.b}${currentItemValue.q}`
              : `${currentItemValue.s}`,
            price: isSocket
              ? currentItemValue.c
              : currentItemValue.c.toFixed(8).replace(/\.?0+$/, ''),
            change: `${1 - currentItemValue.c / currentItemValue.o > 0 ? '-' : ''} ${(
              (1 - currentItemValue.c / currentItemValue.o) *
              100
            ).toFixed(2)}%`,
          },
        ]
      }
      return accum
    }, [])
  }

  useAsyncEffect(async () => {
    try {
      const initialData: any = await axios.get(
        '/exchange-api/v1/public/asset-service/product/get-products',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      )

      setWidgetData(
        initialData.data.data.reduce((accum: [any], item: any) => {
          accum[item.s] = item
          return accum
        }, {}),
      )
    } catch (e) {
      throw new Error(`Initial data error\n${e}`)
    }
  }, [])
  if (socketState) {
    socketState.onmessage = event => {
      const parsedData = JSON.parse(event.data).data
      const changedData = Object.entries(widgetData).reduce((accum: any, oldDataItem: any) => {
        const newItem = parsedData.find((newDataItem: any) => {
          return oldDataItem[1].s === newDataItem.s
        })

        if (newItem) {
          return {
            ...accum,
            [newItem.s]: newItem,
          }
        }

        return accum
      }, widgetData)

      setWidgetData(changedData)
    }
  }

  return (
    <Container>
      <SocketTumbler
        isSocketEnable={socketState}
        onClick={() => {
          if (socketState) {
            socket.close()
            // @ts-ignore
            setSocketState(null)
            console.warn('socketOff')
          } else {
            const newSocket = new WebSocket(
              'wss://stream.binance.com/stream?streams=!miniTicker@arr',
            )
            setSocketState(newSocket)
            console.warn('socketOn')
          }
        }}
      >
        {socketState ? 'Disable Socket' : 'Enable socket'}
      </SocketTumbler>
      <Control currentMode={mode} setMode={setMode} />
      <SearchBar subMode={subMode} setSubMode={setSubMode} />
      <TableCom data={filterByCurrentMode(widgetData)} />
    </Container>
  )
}

export default Widget
