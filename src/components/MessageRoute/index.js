import {formatDistanceToNow} from 'date-fns'
import {
  MessageLists,
  MsgHeadingContainer,
  MsgNames,
  MsgName,
  Date,
  MessageDescription,
  MessageText,
} from './StyledMessage'
import './index.css'

const MessageRoute = props => {
  const {msgData} = props
  const date = formatDistanceToNow(msgData.date)
  return (
    <>
      <MessageLists key={msgData.id}>
        <MsgHeadingContainer>
          <MsgNames className={msgData.colors}>
            {msgData.name.slice(0, 2)}
          </MsgNames>
          <MsgName>
            {msgData.name}
            <sub>
              <Date>{date}</Date>
            </sub>
          </MsgName>
        </MsgHeadingContainer>
        <MessageDescription>
          <MessageText>{msgData.message}</MessageText>
        </MessageDescription>
      </MessageLists>
    </>
  )
}

export default MessageRoute
