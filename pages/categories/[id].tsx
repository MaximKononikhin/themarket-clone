import { GetServerSideProps } from 'next';
import Image from 'next/image';
import MainLayout from '../../Layouts/MainLayout'
import { IItem } from '../../types';
import { endPoint } from '../../utils/constants';

const getIds = (ids: string | string[]) => {
  return Array.isArray(ids) ? ids.map(id => `&concreteCategoryIds[]=${id}`) : `&concreteCategoryIds[]=${ids}`
}

type IHomeProps = {
  data: IItem[]
}

const Categories: React.FC<IHomeProps> = (props) => {
  return (
    <MainLayout>
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
        </ul>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async ({ req, res, query }) => {
  const result = await fetch(`${endPoint}/items?${getIds(query.concreteCategoryIds)}&sex=${query.sex}`);
  const data = await result.json();
  return {
    props: {
      data,
    },
  }
}

export default Categories
