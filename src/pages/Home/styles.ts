import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  padding: 5rem 0 9rem 0;

  display: grid;
  place-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (max-width: 490px) {
    padding-bottom: 5rem;
    form {
      gap: 2.5rem;
    }
  }
`

const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 0.5rem;
  border: 0;
  width: 100%;

  color: ${(props) => props.theme['gray-100']};
  padding: 1rem 2.5rem;
  font-weight: 700;
  line-height: 1.8rem;
  cursor: pointer;
  transition: 0.3s;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
