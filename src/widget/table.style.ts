import styled from 'styled-components'

export const Styles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;

    thead {
      position: sticky;
      top: 0;
      border-bottom: 1px solid rgb(230, 230, 230);
      padding: 4px;
      height: 20px;
      font-size: 12px;
      background-color: #fff;
    }

    tbody {
      background-color: #fff;
      overflow: scroll;
      height: 243px;
      display: flex;
      flex-flow: column nowrap;
    }

    tr {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      font-size: 12px;
      text-align: left;
      width: 33.3%;

      :last-child {
        border-right: 0;
      }
    }
  }
`
