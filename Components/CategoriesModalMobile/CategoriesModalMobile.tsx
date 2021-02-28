import React, { useState } from 'react'
import CategoriesListMobile from '../CategoriesListMobile/CategoriesListMobile';

import Portal from '../Portal/Portal'
import s from './CategoriesModalMobile.module.scss';

type IProps = {
  closeModal: () => void;
}

const CategoriesModalMobile: React.FC<IProps> = (props) => {


  return (
    <Portal>
      <div className={s.categoreisModal} onClick={props.closeModal}>
        <div className={s.wrapper} onClick={(evt) => {
          evt.stopPropagation();
        }}>
          <CategoriesListMobile />
        </div>
      </div>
    </Portal>
  )
}

export default CategoriesModalMobile
