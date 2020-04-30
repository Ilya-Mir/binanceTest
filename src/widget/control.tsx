import React from 'react'
import star from './icons/star.png'
import Dropdown from './dropdown'
import { Container, Button, Star } from './control.style'

const ALTS_OPTIONS = [
  { value: 'alts', label: 'ALTS' },
  { value: 'ETH', label: 'ETH' },
  { value: 'TRX', label: 'TRX' },
  { value: 'XRP', label: 'XRP' },
]

const COIN_OPTIONS = [{ value: 'USDT', label: 'USD(S)' }]

export type HeaderProps = {
  currentMode?: any
  setMode: (arg0: any) => any
}

const Header: React.FC<HeaderProps> = ({ setMode, currentMode }) => {
  return (
    <Container>
      <Button>
        <Star src={star} alt="star" />
      </Button>
      <Button>Margin</Button>
      <Button onClick={() => setMode('BNB')}>Bnb</Button>
      <Button onClick={() => setMode('BTC')}>Btc</Button>
      <Dropdown onDropdownClick={setMode} value={currentMode} options={ALTS_OPTIONS} />
      <Dropdown onDropdownClick={setMode} value={currentMode} options={COIN_OPTIONS} />
    </Container>
  )
}

export default Header
