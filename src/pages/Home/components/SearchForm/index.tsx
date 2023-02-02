/* eslint-disable prettier/prettier */
import { SearchFormContainer } from './style'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>
interface SearchFormProps{
  getRespo: (query?: string) => Promise<void>
}
export function SearchForm({ getRespo }: SearchFormProps) {
  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await getRespo(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input 
        type="text" 
        placeholder="Buscar conteúdo" 
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
