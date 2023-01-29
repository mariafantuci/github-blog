import { Profile } from './components/Profile'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'
import { HomeCardContainer, HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <HomeCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeCardContainer>
    </HomeContainer>
  )
}
