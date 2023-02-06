/* eslint-disable prettier/prettier */
import { Profile } from './components/Profile'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'
import { HomeCardContainer, HomeContainer } from './style'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { NavLink } from 'react-router-dom';

interface RepositoryType {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);

  const getRepositories = useCallback(
    async (query?: string) => {
      const repoName = 'github-blog';
      const userName = 'mariafantuci';
      try {
        const response = await api.get(`repos/${userName}/${repoName}/issues`, {
          params: {
            q: query
          }
        })
        setRepositories(response.data);
      } catch (error) {
        console.log('Eita Giovana o Forninho caiu hahahaha')
      }
    }, []
  )
  
  useEffect(() => {
    getRepositories()
  }, [getRepositories]);
  console.log('repository', repositories)
  
  return (
    <HomeContainer>
      <Profile />
      <SearchForm getRespo={getRepositories}/>
      <HomeCardContainer>
        {repositories.map(repo => {
          return (
            <NavLink key={repo.number} to={'/post?id='+ repo.number}>
              <Card repository={repo}/>
            </NavLink>
          )
        })}
      
      </HomeCardContainer>
    </HomeContainer>
  )
}
