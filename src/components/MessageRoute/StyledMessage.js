import styled from 'styled-components'

export const MessageLists = styled.li`
  list-style: none;
`
export const MsgHeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`
export const MsgNames = styled.p`
  font-size: 15px;
  padding: 15px;
  color: #ffffff;
`
export const MsgName = styled.p`
  color: #181818;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
`

export const Date = styled.span`
  color: #606060;
  font-size: 10px;
  margin: 10px;
`

export const MessageDescription = styled.div`
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 70%;
  padding: 5px;
  margin-left: 50px;
  margin-bottom: 15px;
`
export const MessageText = styled.p`
  color: #181818;
  font-size: 15px;
  font-family: 'Roboto';
`
