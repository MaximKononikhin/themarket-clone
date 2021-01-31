import Image from 'next/image'
import { GetStaticProps } from 'next'
import { IItem } from '../types'
import { endPoint } from '../utils/constants'
import useInfiteScroll from '../hooks/useInfiteScroll'
import Item from '../Components/Item/Item'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  const items = useInfiteScroll('');

  return (
      <div>
        <div>
          {props.data.map(item =>
            <Item data={item} key={item.id}/>
          )}
          {items.map(item =>
            <Item data={item} key={item.id}/>
          )}
        </div>
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