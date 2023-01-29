import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      width: 50%;
      display: flex;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2rem;
      color: ${(props) => props.theme['base-title']};
    }
    span {
      font-size: 0.875rem;
      line-height: 1.4rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    font-size: 20dp;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6rem;
  }
`
