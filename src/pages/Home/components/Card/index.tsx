/* eslint-disable prettier/prettier */
import { CardContainer } from './style'
interface RepositoryType {
  repository: {
    title: string;
    created_at: string;
    body: string;
  }
}

export function Card({ repository }: RepositoryType) {
  return (
    <CardContainer>
      <div className="">
        <h3>{repository.title}</h3>
        <span>Há 1 dia</span>
      </div>
      <p>
        {repository.body}
      </p>
    </CardContainer>
  )
}
