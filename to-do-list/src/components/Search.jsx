import React from 'react'

const Search = ({search, setSearch }) => {
  return (
    <div className='search'>
        <h3>Pesquisar: </h3>
        <input
          type='text'
          value={search}
          placeholder='Procure pela sua tarefa...'
          onChange={(e) => setSearch(e.target.value)}

          />




    </div>
  )
}

export default Search;
