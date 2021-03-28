import Link from 'next/link';
import React, { useState } from 'react'

import { ICategoriesList } from '../../types';
import { menCategory, womenCategory } from '../../services/utils/constants';

import s from './CategoriesListMobile.module.scss';

const CategoriesListMobile: React.FC = () => {
  const [categories, setCategores] = useState<ICategoriesList | null>(null);
  const [items, setItems] = useState<Array<{
    name: string,
    id: number
  }>>([]);

  return (
    <div className={s.wrapper}>
      {!categories && (
        <>
          <h2 style={{padding: '0 20px'}}>Категории</h2>
          <a onClick={() => setCategores(menCategory)}>
            Мужское &rarr;
          </a>
          <a onClick={() => setCategores(womenCategory)}>
            Женское &rarr;
          </a>
        </>
      )}

      {categories && !items.length && (
        <>
          <span className={s.heading}>
            <a onClick={() => setCategores(null)}>
              &larr;
            </a>
            <h2>{categories.title}</h2>
          </span>

          {categories.categories.map(category =>
            <a key={category.title} onClick={() => setItems(category.categoriesTypes)}>
              {category.title} &rarr;
            </a>
          )}
        </>
      )}

      {items.length > 0 && (
        <>
          <span className={s.heading}>
            <a onClick={() => setItems([])}>
              &larr;
            </a>
            <h2>{categories.title}</h2>
          </span>
          {items.map(item =>
            <Link key={item.id} href={`/categories/search?sex=${categories.sex}&concreteCategoryIds=${item.id}`}>{item.name}</Link>
          )}
        </>
      )}
    </div>
  )
}

export default CategoriesListMobile
