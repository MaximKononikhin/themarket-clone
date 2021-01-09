import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import { IItem } from '../types'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>themarket</title>
        <link rel="icon" href="/themarket.ico" />
      </Head>
      <ul>
        {props.data.map(item =>
          <li key={item.id}>
            <h2>{item.model}</h2>
            <h3>{item.size.us}</h3>
            {item.images.map(image => <img key={image.id} src={image.urls[100]}/>)}
          </li>
        )}
      </ul>
    </div>
  )
}

export const  getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const res = await fetch('https://api.themarket.io/items');
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}

export default Home;