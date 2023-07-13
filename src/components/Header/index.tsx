import { HeaderContainer } from './styles'

import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logoIgnite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
