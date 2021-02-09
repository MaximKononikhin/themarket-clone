import Item from '../../Components/Item/Item';
import { IItem } from '../../types';
import s from './ItemsContainer.module.scss';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Loader from '../../Components/Loader/Loader';

type IProps = {
  url: string;
  data: IItem[];
}

const ItemsContainer: React.FC<IProps> = (props) => {
  const {items, isLoading} = useInfiniteScroll(props.url)
  
  return (
    <>
      <div className={s.itemsContainer}>
        {props.data.map(item =>
          <Item data={item} key={item.id} />
        )}
        {items.map(item =>
          <Item data={item} key={item.id} />
        )}
      </div>
      {isLoading && <Loader />}
    </>
  )
}

export default ItemsContainer;
