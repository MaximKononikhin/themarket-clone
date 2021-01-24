import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import useInfiteScroll from '../../hooks/useInfiteScroll';
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
