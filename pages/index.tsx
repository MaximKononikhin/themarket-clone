import Image from 'next/image'
import { GetStaticProps } from 'next'
import { IItem } from '../types'
import { endPoint } from '../utils/constants'
import useInfiteScroll from '../hooks/useInfiteScroll'
import Item from '../Components/Item/Item'
import ItemsContainer from '../Layouts/ItemsContainer/ItemsContainer'
import Loader from '../Components/Loader/Loader'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  const {items, isLoading} = useInfiteScroll('');

  return (
    <>
      <ItemsContainer>
        {props.data.map(item =>
          <Item data={item} key={item.id}/>
        )}
        {items.map(item =>
          <Item data={item} key={item.id}/>
        )}
      </ItemsContainer>
      {isLoading && <Loader />}
    </>
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