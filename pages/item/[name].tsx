import { GetServerSideProps } from 'next';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import Review from '../../Components/Review/Review';

import { IItem, IReview, IUser } from '../../types';
import { endPoint } from '../../utils/constants';
import s from './itemPage.module.scss';

type IProps = {
  item: IItem,
  user: IUser
  reviewsArray: {
    reviews: IReview[]
  }
}

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const SearchPage: React.FC<IProps> = ({ item, user, reviewsArray }) => {
  const [imageNav, setImageNav] = useState(0);

  const reviews = reviewsArray.reviews;

  const onSwipeImage = (current: number) => {
    setImageNav(+current);
  };

  const uploadImagesCount = 2;


  return (
    <div className={s.itemPage}>
      <header className={s.itemPage__header}>
        <div className={s.itemPage__name}>
          <h2>{item.brand}</h2>
          <p>{item.model}</p>
        </div>
        <div className={s.itemPage__sizePrice}>
          <h2>{item.price} руб.</h2>
          <p>{isNaN(+item.size.us) ? item.size.us : `${item.size.us} US`}</p>
        </div>
      </header>

      <div className={s.itemPage__content}>
        <div className={s.itemPage__photos}>
          <p className={s.itemPage__date}>
            {new Date(item.addedAt).toLocaleDateString('ru-ru')}
          </p>
          <div className={s.itemPage__gallery}>
            <VirtualizeSwipeableViews
              index={imageNav}
              onChangeIndex={onSwipeImage}
              slideRenderer={({ key, index }) => {
                return (
                  <div key={`wrapper ${key}`} className={s.itemPage__photoWrapper}>
                    <div style={{ backgroundImage: `url(${item.images[index].urls[670]})` }}
                      className={s.itemPage__photo}
                      key={item.images[index].id}
                    >
                    </div>
                  </div>
                );
              }}
              slideCount={item.images.length}
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

            {imageNav !== item.images.length - 1 && (
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
          <button className={`${s.itemPage__btn} ${s.itemPage__btn_green}`}
            disabled={item.status === 7}>
            {item.status === 7 ? `Продано` : `Купить`}
          </button>
          <button className={s.itemPage__btn}>Связаться с продавцом</button>
          <button className={s.itemPage__btn}>
            <img src="/images/heart.svg" className={s.item__heart} width="28" height="28" />
            Сохранить
          </button>
          <p>
            {item.likesCount}
            {item.likesCount === 2 || item.likesCount === 3 ? ` человека ` : ` человек `}
            хотят эту вещь
          </p>
        </div>
      </div>
      <div className={s.itemPage__secondary}>
        <div className={s.itemPage__description}>
          <h3>Описание вещи от продавца</h3>
          <ul>
            {item.description.split('\n').map((item, index) =>
              <li key={item + index}>
                {item}
              </li>
            )}
          </ul>
        </div>

        <div className={s.itemPage__from}>
          <h3>Откуда</h3>
          <p>{item.city}</p>
        </div>

        <div className={s.itemPage__condition}>
          <h3>Состояние</h3>
          <p>{item.conditionId}/10</p>
        </div>

        <div className={s.sellerInfo}>
          <div className={s.sellerInfo__header}>
            <span>
              <h3>Продавец {user.firstName}</h3>
              <p>На themarket с {new Date(user.addedAt).toLocaleDateString('ru-ru')}</p>
            </span>
            {user.avatar && <img src={user.avatar} width="64" height="64" />}
          </div>
          <div className={s.sellerInfo__stats}>
            <span>
              <h3>{user.sellerScore}</h3>
              <p>рейтинг</p>
            </span>
            <span>
              <h3>{user.soldItems}</h3>
              <p>безопасные продажи</p>
            </span>
            <span>
              <h3>{user.activeItems}</h3>
              <p>активные объявления</p>
            </span>
          </div>
        </div>

        {reviews.length > 0 &&
          <div className={s.reviews}>
            <h2>{reviews.length} отзовов о продавце</h2>
            {reviews.map(review =>
              <Review review={review} key={review.dealId} />
            )}
          </div>
        }


      </div>
    </div>



  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, res, query }) => {
  const { name } = query;
  const itemResult = await fetch(`${endPoint}/items/${name}`);
  const item: IItem = await itemResult.json();
  const userResult = await fetch(`${endPoint}/users/${item.userId}`);
  const user: IUser = await userResult.json();
  const reviewsResult = await fetch(`${endPoint}/users/${item.userId}/reviews?type=supplier`);
  const reviewsArray = await reviewsResult.json();
  return {
    props: {
      item,
      user,
      reviewsArray
    },
  }
}

export default SearchPage