import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  margin: 0 auto;
  padding: 2rem 1.5rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const PostHeaderContentLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PostHeaderContentLinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;
  text-transform: uppercase;

  span {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }

  img {
    width: 12px;
    height: 12px;
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    img {
      width: 18px;
      height: 18px;
    }
  }
`
