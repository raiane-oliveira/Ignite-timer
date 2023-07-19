import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 5rem auto;

  @media (max-width: 1220px) {
    margin: 5rem 1.5rem;
  }

  padding: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-800']};
  display: flex;
  flex-direction: column;
`
