import {useState} from 'react'
import {MainContainer, SidebarContainer, ChatContainer} from './StyledMain'
import SidebarRoute from '../SidebarRoute'
import ChatMessageRoute from '../ChatMessageRoute/index'

const MainRoute = () => {
  const [menu, SetOpenMenu] = useState(false)

  const showMenu = () => {
    SetOpenMenu(prevState => !prevState)
  }
  return (
    <MainContainer>
      <SidebarContainer menu={menu}>
        <SidebarRoute menu={menu} />
      </SidebarContainer>
      <ChatContainer>
        <ChatMessageRoute menu={menu} showMenu={showMenu} />
      </ChatContainer>
    </MainContainer>
  )
}

export default MainRoute
