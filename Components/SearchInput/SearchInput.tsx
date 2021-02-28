import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';

import s from './SearchInput.module.scss';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    
    if (search.length > 0) {
      router.push({
        pathname: '/search/[name]',
        query: {name: search}
      })
    }
  }

  return (
    <form className={s.searchInput} onSubmit={handleSubmit}>
      <input type="text" placeholder="Поиск"
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
    </form>
  )
}

export default SearchInput
