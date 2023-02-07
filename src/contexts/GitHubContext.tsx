/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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

interface ProfileType {
  name: string;
  login: string;
  bio: string;
  followers: number;
  avatar_url: string;
  html_url: string;
  company?: string;
}

interface GithubContextProviderProps {
  children: ReactNode
}
interface GithubContextType {
  repositories: RepositoryType[]
  getRepositories: (query?: string) => Promise<void>,
  profile: ProfileType
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubContextProviderProps){
  const repoName = 'github-blog'
  const userName = 'mariafantuci'

  const [repositories, setRepositories] = useState<RepositoryType[]>([])
  const [profile, setProfile] = useState<ProfileType>(
    {} as ProfileType
  );

  const getRepositories = useCallback(async (query?: string) => {
    try {
      let apiRequest = `repos/${userName}/${repoName}/issues`;
      if(query){
        apiRequest = `/search/issues`
      }
      const response = await api.get(apiRequest, {
        params: {
          q: query,
        },
      })
      setRepositories(response.data)
    } catch (error) {
      console.log('Eita Giovana o Forninho caiu hahahaha')
    }
  }, [])
  
  const getProfile = useCallback(
    async (username: string) => {
      try {
        const response = await api.get(`/users/${username}`, {})
        setProfile(response.data);
      } catch (error) {
        console.log('Eita Giovana o Forninho caiu hahahaha')
      }
    }, []
  )

  useEffect(() => {
    getProfile(userName)
  }, [getProfile]);

  useEffect(() => {
    getRepositories()
  }, [getRepositories]);
  console.log('repository', repositories)

  return (
    <GithubContext.Provider value={
      {
        repositories,
        getRepositories,
        profile
      }
    }>
      {children}
    </GithubContext.Provider>
  )
}