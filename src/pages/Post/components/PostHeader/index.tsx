/* eslint-disable prettier/prettier */
import {
  PostHeaderContainer,
  PostHeaderContent,
  PostHeaderContentLink,
} from './style'
import chevron from '../../../../assets/chevron.svg'
import arrow from '../../../../assets/arrow-up.svg'

import github from '../../../../assets/github.svg'
import calendar from '../../../../assets/calendar.svg'
import comment from '../../../../assets/comment.svg'
import { NavLink } from 'react-router-dom'
import { dateFormatter } from '../../../../utils/formatter'

interface PostHeaderType {
  post: {
    title: string
    body: string
    created_at: string
    number: number
    html_url: string
    comments: number
    user: {
      login: string
    }
  }
}

export function PostHeader({ post }: PostHeaderType) {
  return (
    <PostHeaderContainer>
      <PostHeaderContentLink>
        <NavLink to="/" title="voltar">
          <img src={chevron} alt="" />
          <span>voltar</span>
        </NavLink>
        <NavLink to={post.html_url} title={post.title}>
          <span>ver no github</span>
          <img src={arrow} alt="" />
        </NavLink>
      </PostHeaderContentLink>
      <div className="">
        <h1>{post.title}</h1>
        <PostHeaderContent>
          <div className="">
            <img src={github} alt="" />
            <span>{post.user.login}</span>
          </div>
          <div className="">
            <img src={calendar} alt="" />
            <span>{dateFormatter.format(new Date(post.created_at))}</span>
          </div>
          <div className="">
            <img src={comment} alt="" />
            <span>{post.comments} comentários</span>
          </div>
        </PostHeaderContent>
      </div>
    </PostHeaderContainer>
  )
}
