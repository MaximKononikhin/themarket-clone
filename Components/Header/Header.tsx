import Link from 'next/link';

import s from './Header.module.scss';


const Header = () => {
  return (
    <header className={s.mainHeader}>
      <div className={s.mainHeader__wrapper}>
        <button className={s.mainHeader__burgerBtn}>
          <img src="/images/gamburger.svg" width="20" height="20" alt="menu-btn"/>
        </button>
        <div className={s.mainHeader__logo}>
          <Link href={'/'}>
            <img src="/images/logo_header.svg" width="80" height="12" alt="logo"/>
          </Link>
        </div>
        <form className={s.mainHeader__searchForm}>
          <input type="text" placeholder="Поиск"/>
        </form>
        <ul className={s.mainHeader__categoriesList}>
          <li><a>Мужское</a></li>
          <li><a>Женское</a></li>
          <li><a>Безопасная сделка</a></li>
        </ul>
        <button className={s.mainHeader__sellBtn}>Продать</button>
        <a className={s.mainHeader__signInBtn}>Войти</a>
      </div>
    </header>
  )
}

export default Header
