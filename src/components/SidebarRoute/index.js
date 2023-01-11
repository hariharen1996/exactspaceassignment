import {AiOutlinePlusCircle} from 'react-icons/ai'
import {
  SidebarMenu,
  SidebarItem,
  SidebarLists,
  Sidebar,
  HeadingContainer,
  InitialContainer,
  Initial,
  Description,
  Heading,
  Designation,
  ConversationHeadings,
  ConversationHeading,
  LinkContainer,
  LinkId,
  Name,
} from './StyledSidebar'

const conversationData = [
  {
    id: 1,
    name: 'Poland Office',
    link: '#',
  },
  {
    id: 2,
    name: 'Introductions',
    link: '#',
    bgColor: '#4f46e5',
    linkBg: 'link-active-bg',
    color: '#ffffff',
  },
  {
    id: 3,
    name: 'India Office',
    link: '#',
  },
]

const SidebarRoute = ({menu}) => (
  <>
    {menu && (
      <Sidebar>
        <HeadingContainer>
          <InitialContainer>
            <Initial>RR</Initial>
          </InitialContainer>
          <Description>
            <Heading>Rolande Raimondi</Heading>
            <br />
            <Designation>Research Nurse</Designation>
          </Description>
        </HeadingContainer>
        <SidebarMenu>
          <ConversationHeadings>
            <ConversationHeading>Conversations</ConversationHeading>
            <AiOutlinePlusCircle size={20} />
          </ConversationHeadings>
          <SidebarItem>
            {conversationData.map(data => (
              <SidebarLists bgColor={data.bgColor} color={data.color}>
                <LinkContainer linkBg={data.linkBg}>
                  <LinkId>{data.link}</LinkId>
                </LinkContainer>
                <Name>{data.name}</Name>
              </SidebarLists>
            ))}
          </SidebarItem>
        </SidebarMenu>
      </Sidebar>
    )}
  </>
)

export default SidebarRoute
