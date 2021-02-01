import s from './ItemsContainer.module.scss';

type IProps = {
  children: React.ReactNode
}

const ItemsContainer: React.FC<IProps> = (props) => {
  return (
    <div className={s.itemsContainer}>
      {props.children}
    </div>
  )
}

export default ItemsContainer
