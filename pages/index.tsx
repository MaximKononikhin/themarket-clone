import { GetStaticProps } from 'next'
import { IItem } from '../types'
import ItemsContainer from '../Layouts/ItemsContainer/ItemsContainer'
import { makeApiCall } from '../services/api'

type IHomeProps = {
  data: IItem[]
}

const Home = (props: IHomeProps) => {
  return <ItemsContainer data={props.data} url={''}/>
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const data = await makeApiCall<IItem[]>('items', {method: 'GET'});
  return {
    props: {
      data,
    },
  }
}

export default Home;