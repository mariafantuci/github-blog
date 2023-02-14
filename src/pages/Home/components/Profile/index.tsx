/* eslint-disable prettier/prettier */

import {
  ProfileContainer,
  ProfileContainerImg,
  ProfileContent,
  ProfileContentText,
  ProfileGit,
  ProfileItem,
  ProfileItemContainer,
} from './style'
import github from '../../../../assets/github.svg'
import building from '../../../../assets/building.svg'
import user from '../../../../assets/user-group.svg'
import arrow from '../../../../assets/arrow-up.svg'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface ProfileType {
  name: string;
  login: string;
  bio: string;
  followers: number;
  avatar_url: string;
  html_url: string;
  company?: string;
}

const userName = 'mariafantuci';

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>(
    {} as ProfileType
  );

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

  return (
    <>
    {
      Object.keys(profile).length > 0 &&
        <ProfileContainer>
          <ProfileContainerImg>
            <img
              src={profile.avatar_url}
              alt="github avatar image"
            />
          </ProfileContainerImg>

          <ProfileContent>
            <ProfileContentText>
              <h1>{profile.name}</h1>
              <a href={profile.html_url} title={profile.name + ' profile'}>
                <ProfileGit>
                  <span>github</span>
                    <img src={arrow} alt="arrow up" />
                </ProfileGit>
              </a>
              </ProfileContentText>
            <p>
              {profile.bio}
            </p>
            <ProfileItemContainer>
              <ProfileItem>
                <img src={github} alt="github icon" />
                <span>{profile.login}</span>
              </ProfileItem>
              {profile.company && 
                <ProfileItem>
                <img src={building} alt="building icon" />
                <span>{profile.company}</span>
                </ProfileItem>
              }
              
              <ProfileItem>
                <img src={user} alt="user icon" />
                <span>{profile.followers} seguidores</span>
              </ProfileItem>
            </ProfileItemContainer>
          </ProfileContent>
        </ProfileContainer>
    }
    </>
  
  )
}
