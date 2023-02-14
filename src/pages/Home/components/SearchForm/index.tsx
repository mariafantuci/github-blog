/* eslint-disable prettier/prettier */
import { SearchFormContainer, InputContainer } from './style'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { XSquare } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps{
  getSearchValue: (query: string) => Promise<void>
  cleanSearchInput: () => void
}

export function SearchForm({ getSearchValue, cleanSearchInput }: SearchFormProps) {
  const [searchInput, setSearchInput] = useState('')  

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    getSearchValue(data.query)
  }

  function handleCleanForm(){
    cleanSearchInput()
    setSearchInput('')
  }

  function handleOnChangeSearch(event: ChangeEvent) {
    const value = (event.target as HTMLInputElement).value
    setSearchInput(value)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <InputContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          value={searchInput}
          onChange={handleOnChangeSearch}
        />
        { searchInput.length > 0 && 
          <button onClick={handleCleanForm}>
            <XSquare size={16} />
          </button> 
        }
      </InputContainer>
    </SearchFormContainer>
  )
}
