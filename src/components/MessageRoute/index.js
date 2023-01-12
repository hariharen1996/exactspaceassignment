import {useState} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {FcLike} from 'react-icons/fc'
import {
  MessageLists,
  MsgHeadingContainer,
  MsgNames,
  MsgName,
  Date,
  MessageDescription,
  MessageText,
  LikeCount,
  LikeBtn,
  LikeContainer,
  Messages,
} from './StyledMessage'
import './index.css'

const MessageRoute = props => {
  const [count, setCount] = useState(0)
  const {msgData} = props
  const date = formatDistanceToNow(msgData.date)

  const handleLike = () => {
    setCount(prevState => prevState + 1)
  }

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
        <Messages>
          <MessageDescription>
            <MessageText>{msgData.message}</MessageText>
          </MessageDescription>

          <LikeContainer>
            <LikeBtn type="button" onClick={handleLike}>
              <FcLike size={23} />
            </LikeBtn>
            <LikeCount>{count}</LikeCount>
          </LikeContainer>
        </Messages>
      </MessageLists>
    </>
  )
}

export default MessageRoute
