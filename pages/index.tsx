import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import { IItem } from '../types'
import { useEffect, useState } from 'react'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState(props.data)

  const infiniteScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      const res =  await fetch(`https://api.themarket.io/items?&skip=${skip + 18}`);
      const result = await res.json();
      setData([...data, ...result]);
      setSkip(prevSkip => prevSkip + 18);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [skip])

  return (
    <div className={styles.container}>
      <Head>
        <title>themarket</title>
        <link rel="icon" href="/themarket.ico" />
        <meta name="description" content="Купить и проджать модную одежду по лучшим ценам."/>
      </Head>
      <ul>
        {data.map(item =>
          <li key={item.id}>
            <h2>{item.model}</h2>
            <h3>{item.size.us}</h3>
            {item.images.map(image => <img key={image.id} src={image.urls[100]} alt={item.model}/>)}
          </li>
        )}
      </ul>
    </div>
  )
}

export const  getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const res = await fetch('https://api.themarket.io/items?&skip=0');
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}

export default Home;