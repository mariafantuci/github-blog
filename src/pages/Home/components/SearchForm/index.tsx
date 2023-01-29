import { SearchFormContainer } from './style';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}