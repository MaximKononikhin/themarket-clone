import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { IItem } from '../types'
import { useEffect, useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import { endPoint } from '../utils/constants'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState(props.data)

  const infiniteScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      const res =  await fetch(`${endPoint}/items?&skip=${skip + 18}`);
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
    <MainLayout>
      <div>
        <Head>
          <title>themarket</title>
          <link rel="icon" href="/images/themarket.ico" />
          <meta name="description" content="Купить и продать модную одежду по лучшим ценам."/>
        </Head>
        <ul>
          {data.map(item =>
            <li key={item.id}>
              <h2>{item.model}</h2>
              <h3>{item.size.us}</h3>
              {item.images.map(image => 
              <Image
                key={`${image.id}`} 
                width={100}
                height={100}
                src={image.urls[100]} 
                alt={item.model}
              />)}
            </li>
          )}
        </ul>
      </div>
    </MainLayout>
  )
}

export const  getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const res = await fetch(`${endPoint}/items`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}

export default Home;