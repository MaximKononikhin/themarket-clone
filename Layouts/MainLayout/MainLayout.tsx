import Head from 'next/head';
import { useState } from 'react';

import Header from "../../Components/Header/Header";
import SendEmailModal from '../../Components/SendEmailModal/SignInModal';
import s from './MainLayout.module.scss';

type IMainLayout = {
  children: React.ReactNode
}


const MainLayout: React.FC<IMainLayout> = ({ children}) => {
  const [isSignInModal, setSignInModal] = useState(false);
  return (
    <div>
      <Head>
        <title>themarket</title>
        <link rel="icon" href="/images/themarket.ico" />
        <meta name="description" content="Купить и продать модную одежду по лучшим ценам."/>
      </Head>
      <Header onSignInBtnClick={() => setSignInModal(true)}/>
      <div className={s.container}>
        {children}
      </div>
      {isSignInModal && <SendEmailModal />}
    </div>
  )
}

export default MainLayout
