import { GetStaticProps } from 'next'
import { IItem } from '../types'
import { endPoint } from '../utils/constants'
import ItemsContainer from '../Layouts/ItemsContainer/ItemsContainer'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  return <ItemsContainer data={props.data} url={''}/>
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