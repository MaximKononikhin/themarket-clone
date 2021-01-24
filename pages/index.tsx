import Image from 'next/image'
import { GetStaticProps } from 'next'
import { IItem } from '../types'
import MainLayout from '../Layouts/MainLayout'
import { endPoint } from '../utils/constants'
import useInfiteScroll from '../hooks/useInfiteScroll'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  const items = useInfiteScroll('');

  return (
      <div>
        <ul>
          {props.data.map(item =>
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
          {items.map(item =>
            <li key={item.id}>
              <h2>{item.model}</h2>
              <h3>{item.size.us}</h3>
              {item.images.map(image => 
              <img
                key={`${image.id}`} 
                src={image.urls[100]} 
                alt={item.model}
              />)}
            </li>
          )}
        </ul>
      </div>
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