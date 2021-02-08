import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { ICategoriesList } from '../../types';
import { menCategory, womenCategory } from '../../utils/constants';
import CategoriesModal from '../CategoriesModal/CategoriesModal';

import s from './Header.module.scss';

const getUrl = (data: ICategoriesList) => {
  const ids = data.categories.map(category => category.categoriesIds);
  return `/categories/search?${ids.map(id => `&concreteCategoryIds=${id}`).join('')}&sex=${data.sex}`
}



type IProps = {
  onSignInBtnClick: () => void;
}

const Header: React.FC<IProps> = (props) => {
  const [data, setData] = useState<ICategoriesList | null>(null);
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    router.push({
      pathname: '/search/[name]',
      query: {name: search}
    })
  }
  
  return (
    <header className={s.mainHeader}>
      <div className={s.mainHeader__wrapper}>
        <button className={s.mainHeader__burgerBtn}>
          <img src="/images/hamburger.svg" width="20" height="20" alt="menu-btn"/>
        </button>
        <div className={s.mainHeader__logo}>
          <Link href={'/'}>
            <img src="/images/logo_header.svg" width="80" height="12" alt="logo"/>
          </Link>
        </div>
        <form className={s.mainHeader__searchForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Поиск"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
          />
        </form>
        <ul className={s.mainHeader__categoriesList}>
          <li 
            onMouseEnter={() => setData(menCategory)}
            onMouseLeave={() => setData(null)}
          >
            <Link href={getUrl(menCategory)}>Мужское</Link>
          </li>
          <li
            onMouseEnter={() => setData(womenCategory)}
            onMouseLeave={() => setData(null)}
          >
            <Link href={getUrl(womenCategory)}>Женское</Link>
          </li>
          <li><a>Безопасная сделка</a></li>
        </ul>
        <button className={s.mainHeader__sellBtn}>Продать</button>
        <a className={s.mainHeader__signInBtn}
          onClick={props.onSignInBtnClick}
        >Войти</a>
      </div>
      {data && (
        <CategoriesModal
          data={data}
          onMouseEnter={() => setData(data)}
          onMouseLeave={() => setData(null)}
        />
      )}
    </header>
  )
}

export default Header
