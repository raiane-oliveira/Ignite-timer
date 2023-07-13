import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: ${(props) => props.theme['gray-100']};
      display: grid;
      place-content: center;
      transition: all 0.3s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
