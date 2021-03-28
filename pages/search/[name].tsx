import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import ItemsContainer from '../../Layouts/ItemsContainer/ItemsContainer';
import { IItem } from '../../types';
import { makeApiCall } from '../../services/api';

type IProps = {
  data: IItem[]
}

const SearchPage: React.FC<IProps> = (props) => {
  const {name} = useRouter().query;
  return <ItemsContainer data={props.data} url={`query=${name}`}/>
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, res, query }) => {
  const {name} = query;
  const data = await makeApiCall<IItem[]>(`items?query=${name}`, {method: 'GET'});
  return {
    props: {
      data,
    },
  }
}

export default SearchPage
