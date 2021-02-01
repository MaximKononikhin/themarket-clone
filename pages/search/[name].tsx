import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Item from '../../Components/Item/Item';
import useInfiteScroll from '../../hooks/useInfiteScroll';
import ItemsContainer from '../../Layouts/ItemsContainer/ItemsContainer';
import { IItem } from '../../types';
import { endPoint } from '../../utils/constants';

type IProps = {
  data: IItem[]
}

const SearchPage: React.FC<IProps> = (props) => {
  const {name} = useRouter().query;

  const items = useInfiteScroll(`query=${name}`)

  return (
    <ItemsContainer>
      {props.data.map(item =>
        <Item data={item} key={item.id}/>
      )}
      {items.map(item =>
        <Item data={item} key={item.id}/>
      )}
    </ItemsContainer>
  )
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
