import styled, {css} from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #e2e8f0;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  ${props =>
    props.menu
      ? css`
          max-width: 200px;
          min-width: 200px;
        `
      : css`
          max-width: 10px;
          min-width: 10px;
        `}
`
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`
