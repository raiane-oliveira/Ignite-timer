import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  @media (max-width: 755px) {
    font-size: 7rem;
    line-height: 5rem;
  }

  @media (max-width: 490px) {
    font-size: 4rem;
    line-height: 2rem;
    gap: 0.6rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 0.5rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 755px) {
    width: 2rem;
  }

  @media (max-width: 490px) {
    width: 0.5rem;
  }
`
