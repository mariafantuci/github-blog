import {
  PostHeaderContainer,
  PostHeaderContent,
  PostHeaderContentLink,
  PostHeaderContentLinkItem,
} from './style'
import chevron from '../../../../assets/chevron.svg'
import arrow from '../../../../assets/arrow-up.svg'

import github from '../../../../assets/github.svg'
import calendar from '../../../../assets/calendar.svg'
import comment from '../../../../assets/comment.svg'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderContentLink>
        <PostHeaderContentLinkItem>
          <img src={chevron} alt="" />
          <span>voltar</span>
        </PostHeaderContentLinkItem>
        <PostHeaderContentLinkItem>
          <span>ver no github</span>
          <img src={arrow} alt="" />
        </PostHeaderContentLinkItem>
      </PostHeaderContentLink>
      <div className="">
        <h1>JavaScript data types and data structures</h1>
        <PostHeaderContent>
          <div className="">
            <img src={github} alt="" />
            <span>ellie</span>
          </div>
          <div className="">
            <img src={calendar} alt="" />
            <span>Há 1 dia</span>
          </div>
          <div className="">
            <img src={comment} alt="" />
            <span>5 comentários</span>
          </div>
        </PostHeaderContent>
      </div>
    </PostHeaderContainer>
  )
}
