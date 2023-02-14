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
        let url = `repos/${userName}/${repoName}/issues`
        if(query) {
          url = `/search/issues?q=${query}repo:${userName}/${repoName}`
        }
        const response = await api.get(url, {})
        if(query){
          setRepositories(response.data.items);
        }else{
          setRepositories(response.data);
        }        
      } catch (error) {
        console.log('Error', error)
      }
    }, []
  )

  async function handleFormSubmit(query: string){
    await getRepositories(query)
  }

  async function cleanSearchInput(){
    await getRepositories()
  }

  useEffect(() => {
    getRepositories()
  }, [getRepositories]);

  
  return (
    <HomeContainer>
      <Profile />
      <SearchForm 
        getSearchValue={handleFormSubmit}
        cleanSearchInput={cleanSearchInput}
      />
      <HomeCardContainer>
        {
          repositories.length > 0 &&
          repositories.map(repo => {
            return (
              <NavLink key={repo.number} to={'/post?id='+ repo.number}>
                <Card repository={repo}/>
              </NavLink>
            )
          })
        }
      
      </HomeCardContainer>
    </HomeContainer>
  )
}
