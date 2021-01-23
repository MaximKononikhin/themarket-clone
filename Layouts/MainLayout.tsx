import Head from 'next/head';
import Header from "../Components/Header/Header";

type IMainLayout = {
  children: React.ReactNode
}


const MainLayout: React.FC<IMainLayout> = ({ children}) => {
  return (
    <div>
      <Head>
        <title>themarket</title>
        <link rel="icon" href="/images/themarket.ico" />
        <meta name="description" content="Купить и продать модную одежду по лучшим ценам."/>
      </Head>
      <Header/>
      {children}
    </div>
  )
}

export default MainLayout
