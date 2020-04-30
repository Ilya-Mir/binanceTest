import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  background-color: rgb(247, 247, 247);
  flex-wrap: nowrap;
  height: 32px;
  padding: 4px;
`

export const Button = styled.button<{
  isActive?: boolean
}>`
  background-color: rgb(255, 255, 255);
  color: ${({ isActive }) => (isActive ? 'rgb(240, 185, 11)' : 'rgb(51, 51, 51)')};
  cursor: pointer;
  line-height: 100%;
  font-size: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isActive }) => (isActive ? 'rgb(243, 186, 47)' : 'rgb(230, 230, 230)')};
  border-image: initial;
  padding: 4px 5px;
  margin: 0 2px 0 0;
  outline: 0;

  &:hover {
    color: rgb(240, 185, 11);
    border-color: rgb(243, 186, 47);
  }
`

export const Star = styled.img`
  width: 14px;
  height: 14px;
`
