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

const getIds = (ids: string | string[]) => {
  return Array.isArray(ids) ? ids.map(id => `&concreteCategoryIds[]=${id}`).join('') : `&concreteCategoryIds[]=${ids}`
}

const CategoriesPage: React.FC<IProps> = (props) => {
  const {concreteCategoryIds, sex} = useRouter().query;

  const items = useInfiteScroll(
    `${getIds(concreteCategoryIds)}&sex=${sex}`
  );

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
  const {concreteCategoryIds, sex} = query;
  const result = await fetch(`${endPoint}/items?${getIds(concreteCategoryIds)}&sex=${sex}`);
  const data = await result.json();
  return {
    props: {
      data,
    },
  }
}

export default CategoriesPage
