import styled from 'styled-components';
export const NotificationsComponentWrapper = styled.div`
      display:flex;
      width:100%; 
      justify-content:space-evenly;
`
export const Select = styled.select`
      display:${props => props.showSelect ? 'flex' : 'none'};
      border-radius:5px;
      padding:2px 5px;
`

export const Option = styled.option`

`

