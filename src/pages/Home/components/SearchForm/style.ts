/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 4.5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    &:focus {
      color: ${(props) => props.theme['base-text']};
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      line-height: 1.8rem;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
    }
    span {
      line-height: 1.4rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const InputContainer = styled.div`
  position: relative; 
  width: 100%;
 
  
  button{
    background: transparent;
    border: none;
    position: absolute;
    top: calc(110% - 75%);
    right: 10px;
    svg{
      color: ${(props) => props.theme['base-label']};
    }
    
    &:focus {
      color: ${(props) => props.theme['base-text']};
    }
  }
`