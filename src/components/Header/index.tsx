import { HeaderContainer, HeaderContent, HeaderEffectLeft, HeaderEffectRight } from './style'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderEffectLeft />
      <HeaderContent>
        <img
          src={logo}
          alt="two triangles one on another, both green and a white text written the site's name"
        />
      </HeaderContent>
      <HeaderEffectRight />
    </HeaderContainer>
  )
}
