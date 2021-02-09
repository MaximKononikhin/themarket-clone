import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import ItemsContainer from '../../Layouts/ItemsContainer/ItemsContainer';
import { IItem } from '../../types';
import { endPoint } from '../../utils/constants';

type IProps = {
  data: IItem[]
}

const SearchPage: React.FC<IProps> = (props) => {
  const {name} = useRouter().query;

  return <ItemsContainer data={props.data} url={`query=${name}`}/>
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, res, query }) => {
  const {name} = query;
  const result = await fetch(`${endPoint}/items?query=${name}`);
  const data = await result.json();
  return {
    props: {
      data,
    },
  }
}

export default SearchPage
