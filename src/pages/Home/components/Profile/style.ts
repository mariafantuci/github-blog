import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileContainerImg = styled.div`
  img {
    border-radius: 8px;
    height: 148px;
    width: 148px;
    object-fit: cover;
    object-position: top center;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  
  p{
    font-size: 1rem;
    line-height: 1.6rem;
    margin-bottom: 1.5rem;
  }
`

export const ProfileGit = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${(props) => props.theme['blue']};
  align-items: center;
  border-bottom: 1px solid transparent;

  img {
    height: 12px;
    width: 12px;
  }

  &:hover{
    border-bottom: 1px solid ${(props) => props.theme['blue']};
  }
`

export const ProfileContentText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  h1{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.95rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ProfileItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  img {
    height: 18px;
    width: 18px;
  }

  span{
    font-size: 1rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`