import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin-right: 15px;
  margin-top: 15px;
`

export const MenuBtn = styled.button`
  background-color: #181818;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
`

export const ChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ChatHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`

export const ChatHeading = styled.h1`
  color: #181818;
  font-size: 18px;
  font-family: 'Roboto';
`
export const ChatText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
`
export const ChatData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`
export const ChatNumber = styled.p`
  color: #475569;
`

export const FormContainer = styled.div`
  position: fixed;
  bottom: 0;
  left:50%
  transform: translate(-50%, -50%);
  margin-left: 10px;
  margin-right: 15px;
  width: 75%;  
  
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid #475569;
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;
`
export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`
export const Form = styled.form``
export const MessageContainer = styled.div`
  margin-left: 5px;
  margin-bottom: 5px;
`
export const MessageItem = styled.ul`
  padding-left: 0px;
`
export const Hr = styled.hr`
  background-color: #606060;
  width: 95%;
`
