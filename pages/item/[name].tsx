import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Item from '../../Components/Item/Item';
import { IItem } from '../../types';
import { endPoint } from '../../utils/constants';

type IProps = {
  data: IItem
}

const SearchPage: React.FC<IProps> = ({data}) => {
  const {name} = useRouter().query;

  return (
    <div>
      <p>{data.brand}</p>
      <img src={data.images[0].urls[1440]} width="400" height="400" alt=""/>
    </div>

  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, res, query }) => {
  const {name} = query;
  const result = await fetch(`${endPoint}/items/${name}`);
  const data = await result.json();
  return {
    props: {
      data,
    },
  }
}

export default SearchPage