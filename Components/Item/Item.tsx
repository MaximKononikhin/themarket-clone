import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import { IItem } from '../../types';
import s from './Item.module.scss';

type IProps = {
  data: IItem
}

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const uploadImagesCount = 2;


const Item: React.FC<IProps> = ({ data }) => {
  const [imageNav, setImageNav] = useState(0);

  const onSwipeImage = (current: number) => {
    setImageNav(+current);
  };

  const router = useRouter();


  return (

    <div className={s.item} onClick={() => {
      router.push(`/item/${data.id}`);
    }}>
      <div className={s.item__likes}>
        <img src="/images/heart.svg" className={s.item__heart} width="28" height="28" />
        {data.likesCount}
      </div>
      <VirtualizeSwipeableViews
        index={imageNav}
        onChangeIndex={onSwipeImage}
        slideRenderer={({ key, index }) => {
          return (
            <div key={`wrapper ${key}`} className={s.item__photoWrapper}>
              <div style={{ backgroundImage: `url(${data.images[index].urls[455]})` }}
                className={s.item__photo}
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
          className={s.item__leftArrow}
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
          className={s.item__rightArrow}
        >
          <img src="/images/rightArrow.svg" width="16" height="27" alt="" />
        </button>
      )}
      <p className={s.item__date}>{new Date(data.addedAt).toLocaleDateString('ru-ru')}</p>
      <p className={s.item__brand}>{data.brand}</p>
      <p className={s.item__model}>{data.model}</p>
      <p className={s.item__size}>
        {isNaN(+data.size.us) ? data.size.us : `${data.size.us} US`}
      </p>
      <p className={s.item__size}>{data.price} руб.</p>
    </div>




  )
}

export default Item
