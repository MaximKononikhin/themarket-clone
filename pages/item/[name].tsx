import { GetServerSideProps } from 'next';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import { IItem } from '../../types';
import { endPoint } from '../../utils/constants';
import s from './itemPage.module.scss';

type IProps = {
  data: IItem
}

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const SearchPage: React.FC<IProps> = ({ data }) => {
  const [imageNav, setImageNav] = useState(0);

  const onSwipeImage = (current: number) => {
    setImageNav(+current);
  };

  const uploadImagesCount = 2;

  return (
    <div className={s.itemPage}>
      <header className={s.itemPage__header}>
        <div className={s.itemPage__name}>
          <h2>{data.brand}</h2>
          <p>{data.model}</p>
        </div>
        <div className={s.itemPage__sizePrice}>
          <h2>{data.price} руб.</h2>
          <p>{isNaN(+data.size.us) ? data.size.us : `${data.size.us} US`}</p>
        </div>
      </header>

      <div className={s.itemPage__content}>
        <div className={s.itemPage__photos}>
          <p className={s.itemPage__date}>
            {new Date(data.addedAt).toLocaleDateString('ru-ru')}
          </p>
          <div className={s.itemPage__gallery}>
            <VirtualizeSwipeableViews
              index={imageNav}
              onChangeIndex={onSwipeImage}
              slideRenderer={({ key, index }) => {
                return (
                  <div key={`wrapper ${key}`} className={s.itemPage__photoWrapper}>
                    <div style={{ backgroundImage: `url(${data.images[index].urls[670]})` }}
                      className={s.itemPage__photo}
                      key={data.images[index].id}
                    >
                    </div>
                  </div>
                );
              }}
              slideCount={data.images.length}
              overscanSlideBefore={uploadImagesCount}
              overscanSlideAfter={uploadImagesCount}
            />
            {imageNav !== 0 && (
              <button
                onClick={(evt) => {
                  evt.stopPropagation();
                  onSwipeImage(imageNav - 1);
                }}
                className={s.itemPage__leftArrow}
              >
                <img src="/images/leftArrow.svg" width="16" height="27" alt="" />
              </button>
            )}

            {imageNav !== data.images.length - 1 && (
              <button
                onClick={(evt) => {
                  evt.stopPropagation();
                  onSwipeImage(imageNav + 1);
                }}
                className={s.itemPage__rightArrow}
              >
                <img src="/images/rightArrow.svg" width="16" height="27" alt="" />
              </button>
            )}
          </div>
        </div>
        <div className={s.itemPage__btns}>
          <button className={`${s.itemPage__btn} ${s.itemPage__btn_green}`}>Купить</button>
          <button className={s.itemPage__btn}>Связаться с продавцом</button>
          <button className={s.itemPage__btn}>
            <img src="/images/heart.svg" className={s.item__heart} width="28" height="28" />
            Сохранить
          </button>
          <p>
            {data.likesCount}
            {data.likesCount === 2 || data.likesCount === 3? ` человека ` : ` человек `} 
            хотят эту вещь
          </p>
        </div>
      </div>
      <div className={s.itemPage__description}>
        <h3>Описание вещи от продавца</h3>
        <ul>
          {data.description.split('\n').map(item =>
            <li key={item}>
              {item}
            </li>
          )}
        </ul>
      </div>

      <div className={s.itemPage__from}>
        <h3>Откуда</h3>
          <p>{data.city}</p>
      </div>

      <div className={s.itemPage__condition}>
        <h3>Состояние</h3>
          <p>{data.conditionId}/10</p>
      </div>
      
    </div>



  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, res, query }) => {
  const { name } = query;
  const result = await fetch(`${endPoint}/items/${name}`);
  const data = await result.json();
  return {
    props: {
      data,
    },
  }
}

export default SearchPage