import React from 'react'
import { ICategoriesList } from '../../types'

type IProps = {
  data: ICategoriesList
}

const CategoriesModal: React.FC<IProps> = (props) => {
  return (
    <div>
      {props.data.categories.map((elem) =>
      <>
        <a key={elem.title}>{elem.title}</a>
        <ul key={elem.title}>
          {elem.categoriesTypes.map((item) =>
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </>
      )}
    </div>
  )
}

export default CategoriesModal
