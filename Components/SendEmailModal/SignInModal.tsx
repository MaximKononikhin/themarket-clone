import React from 'react'
import Portal from '../Portal/Portal';
import s from './SignInModal.module.scss';

const SendEmailModal = () => {
  return (
    <Portal>
      <div className={s.signInModal}>
        <div className={s.signInModal__wrapper}>
          
        </div>
      </div>
    </Portal>

  )
}

export default SendEmailModal
