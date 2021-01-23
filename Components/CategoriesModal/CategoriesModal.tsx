import Link from 'next/link'
import React from 'react'
import { ICategoriesList } from '../../types'
import Portal from '../Portal/Portal'

import s from './CategoriesModal.module.scss'

type IProps = {
  data: ICategoriesList,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

const CategoriesModal: React.FC<IProps> = (props) => {
  return (
    <Portal>
      <div className={s.categoreisModal}
      >
        <div
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          className={s.categoreisModal__wrapper}
        >
          <div className={s.categoreisModal__subwrapper}
          >
            {props.data.categories.map((elem, i) =>
              <div
                key={`id${i}${elem.title}`}
                className={s.categoreisModal__column}
              >
                <Link
                  key={`id${i}${elem.title}`}
                  href={`/categories/search?sex=${props.data.sex}${elem.categoriesIds.map((id => `&concreteCategoryIds=${id}`)).join('')}`}
                >
                  {elem.title}
                </Link>
                <ul
                  key={`${i}${elem.title}`}
                  className={s.categoreisModal__list}
                >
                  {elem.categoriesTypes.map((item) =>
                    <li key={`id${elem.title}-${item.id}`}>
                      <Link
                        href={`/categories/search?sex=${props.data.sex}&concreteCategoryIds=${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              )}
          </div>
        </div>
      </div>
    </Portal>
  )
}



export default CategoriesModal
