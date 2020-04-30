import styled from 'styled-components'

export const RadioLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 4px;
  background-color: #fff;
`
