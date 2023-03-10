import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {BsEmojiSmile} from 'react-icons/bs'
import Picker from 'emoji-picker-react'
import {
  MenuContainer,
  ChatContainer,
  MenuBtn,
  ChatHeadingContainer,
  ChatHeading,
  ChatText,
  ChatData,
  ChatNumber,
  FormContainer,
  Input,
  ChatMessages,
  Form,
  MessageContainer,
  MessageItem,
  Hr,
  Emoji,
  EmojiBox,
} from './StyledChat'
import MessageRoute from '../MessageRoute'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

const backgroundColors = [
  'blue',
  'orange',
  'yellow',
  'light-blue',
  'pink',
  'green',
]

const ChatMessageRoute = ({menu, showMenu}) => {
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState(false)
  const [data, setData] = useState([])

  const showEmoji = () => {
    setEmoji(prevState => !prevState)
  }

  const displayEmoji = em => {
    setMessage(prevState => prevState + em.emoji)
    setEmoji(false)
  }

  const changeMessage = event => {
    setMessage(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()

    const colors = `bg-colors ${
      backgroundColors[Math.ceil(Math.random() * backgroundColors.length - 1)]
    }`
    const name = `${userList[Math.ceil(Math.random() * userList.length - 1)]}`
    const newData = {
      id: uuidv4(),
      name,
      message,
      colors,
      count: 0,
      date: new Date(),
    }

    setData([...data, newData])
    setMessage('')
  }

  return (
    <>
      <MenuContainer>
        <MenuBtn type="button" onClick={showMenu}>
          {!menu ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </MenuBtn>
      </MenuContainer>
      <ChatMessages>
        <ChatContainer>
          <ChatHeadingContainer>
            <ChatHeading>Introductions</ChatHeading>
            <ChatText>This Channel is For Company Wide Chatter</ChatText>
          </ChatHeadingContainer>
          <ChatData>
            <ChatNumber>3 | 100</ChatNumber>
            <FiUsers size={20} />
          </ChatData>
        </ChatContainer>
        <Hr />
        <MessageContainer>
          <MessageItem>
            {data.map(msgData => (
              <MessageRoute msgData={msgData} key={msgData.id} />
            ))}
          </MessageItem>
        </MessageContainer>

        <FormContainer>
          <Form onSubmit={submitForm}>
            <Input
              type="text"
              placeholder="Type Message"
              value={message}
              onChange={changeMessage}
            />
          </Form>
          <Emoji type="button" onClick={showEmoji} menu={menu}>
            <BsEmojiSmile size={20} className="emoji" />
          </Emoji>
        </FormContainer>
        <EmojiBox>
          {emoji ? <Picker onEmojiClick={displayEmoji} theme="dark" /> : ''}
        </EmojiBox>
      </ChatMessages>
    </>
  )
}

export default ChatMessageRoute
