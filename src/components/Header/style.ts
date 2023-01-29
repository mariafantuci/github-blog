import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: linear-gradient(180deg, #040F1A, #1C2F41);
  display: flex;
  flex-direction: row;
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 18.5rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-top: 0;
    height: 10.5rem;
    align-items: flex-start;
    padding-top: 1rem;

    img{
      max-width: 30%;
    }
  }
`

export const HeaderEffectLeft= styled.div`
  width: 50%;
  height: auto;
  background-image: url('/src/assets/effect.svg');
  margin: 4.375rem 0 2.375rem;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 30%;
    margin: 2rem 0 0 0;
  }
`

export const HeaderEffectRight= styled.div`
  width: 50%;
  height: auto;
  background-image: url('/src/assets/effect.svg');
  margin: 1.875rem 0 1.875rem;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    width: 30%;
    margin: 1rem 0 0 0;
  }
`