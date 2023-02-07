/* eslint-disable prettier/prettier */
import { Profile } from './components/Profile'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'
import { HomeCardContainer, HomeContainer } from './style'
import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { GithubContext } from '../../contexts/GitHubContext';

export function Home() {
  const { repositories } = useContext(GithubContext);

  return (
    <HomeContainer>
      <Profile />
      <SearchForm/>
      <HomeCardContainer>
        {repositories.map(repo => {
          return (
            <NavLink key={repo.number} to={'/post'}>
              <Card repository={repo}/>
            </NavLink>
          )
        })}
      
      </HomeCardContainer>
    </HomeContainer>
  )
}
