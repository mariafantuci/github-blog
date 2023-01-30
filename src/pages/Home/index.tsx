/* eslint-disable prettier/prettier */
import { Profile } from './components/Profile'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'
import { HomeCardContainer, HomeContainer } from './style'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';

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

const repo = 'mariafantuci/github-blog';
const userName = 'mariafantuci';

export function Home() {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);

  const getRepositories = useCallback(
    async (repoName: string, userName: string, query?: string) => {
      try {
        const response = await api.get(`/search/issues?q=${query}%20label:published%20repo:${userName}/${repoName}`, {})
        setRepositories(response.data);
      } catch (error) {
        console.log('Eita Giovana o Forninho caiu hahahaha')
      }
    }, []
  )

  useEffect(() => {
    getRepositories(repo, userName)
  }, [getRepositories]);
  console.log('repository', repositories)
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <HomeCardContainer>
        {repositories.map(repo => {
          return (
              <Card key={repo.id} repository={repo}/>
          )
        })}
      
      </HomeCardContainer>
    </HomeContainer>
  )
}
