import styled from 'styled-components'

export const Navbar = styled.nav`
  @media screen and (max-width: 800px) {
    background-color: #e2e8f0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: block;
  }
`

export const ConversationContainer = styled.div``

export const NavItem = styled.ul`
  padding-left: 0px;
  display: flex;
`
export const NavLists = styled.li`
  list-style: none;
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 200px;
  background-color: #f1f1f1;
`
export const SidebarMenu = styled.div`
  align-self: flex-start;
  margin: 10px;
`
export const SidebarItem = styled.ul`
  padding-left: 0px;
`
export const SidebarLists = styled.li`
  list-style: none;
  display: flex;
  color: ${props => props.color};

  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 5px;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  gap: 20px;
  width: 100%;
  margin-top: 12px;
`
export const InitialContainer = styled.div`
  background-color: #ff0b37;
  color: #ffffff;
  padding: 12px;
  border-radius: 50%;
`
export const Initial = styled.h1`
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const Description = styled.div``
export const Heading = styled.span`
  font-size: 12px;
  color: #181818;
  font-weight: 400;
`
export const Designation = styled.span`
  font-size: 12px;
  color: #909090;
  font-weight: 300;
`

export const ConversationHeadings = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`
export const ConversationHeading = styled.h1`
  color: #475569;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 12px;
`
export const LinkContainer = styled.div`
  background-color: #d7dfe9;
  padding: 12px;
  margin: 5px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
export const LinkId = styled.p`
  font-size: 12px;
`
export const Name = styled.p`
  font-size: 13px;
`
