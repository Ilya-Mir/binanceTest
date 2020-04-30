import styled from 'styled-components'

export const SocketTumbler = styled.button<{ isSocketEnable: any }>`
  position: absolute;
  left: -100px;
  top: 50px;
  width: 80px;
  height: 40px;
  background-color: ${({ isSocketEnable }) => (isSocketEnable ? '#61dafb' : 'red')};
  border-radius: 10px;
`
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;
  padding: 0;
  box-sizing: border-box;
  margin: 5px 0 5px 5px;
  width: 296px;
`
