/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { api } from '../../lib/axios'
import { PostHeader } from './components/PostHeader'
import { PostContent } from './components/PostHeader/style';
import { PostContainer } from './style'

interface IssueGitType {
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

export function Post() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const issueNumber = urlParams.get('id')

  if(!issueNumber){
    window.location.href = window.location.origin
  }

  const [issueGit, setIssueGit] = useState({} as IssueGitType);

  const getIssue = useCallback(
    async (id: string) => {
      const repoName = 'github-blog';
      const userName = 'mariafantuci';
      try {
        const response = await api.get(`repos/${userName}/${repoName}/issues/${id}`, {})
        setIssueGit(response.data);      
      } catch (error) {
        console.log('Error', error)
      }
    }, []
  )

  useEffect(() => {
    getIssue(issueNumber!)
  }, []);
  
  return (
    <PostContainer>
      {Object.keys(issueGit).length !== 0  && <PostHeader post={issueGit}/> }
      <PostContent>
        {Object.keys(issueGit).length !== 0  && 
          <ReactMarkdown>
            {issueGit.body}
          </ReactMarkdown>
        }
      </PostContent>
    </PostContainer>
  )
}
