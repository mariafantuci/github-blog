import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const HomeCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4.5rem;
`
