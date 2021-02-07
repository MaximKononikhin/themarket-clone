import { useRouter } from "next/router";
import { IReview } from "../../types"
import s from './Review.module.scss';

type IProps = {
  review: IReview
}

const Review: React.FC<IProps> = ({ review }) => {
  const router = useRouter();
  return (
    <div className={s.review}>
      <header>
        {review.reviewer.image &&
          <img src={review.reviewer.image} width="40" height="40" />
        }
        <div>
          <h2>{review.reviewer.firstName}</h2>
          <p>{new Date(review.createdAt).toLocaleDateString('ru-ru')}</p>
        </div>
      </header>
      <div className={s.review__rating}>
        {Array.from({ length: review.rating }).map((star, index) =>
          <img key={index} src="/images/star.svg" width="15" height="15" />)}
      </div>
      <p className={s.review__text}>{review.text}</p>
      <p className={s.review__item}>
        Купил {` `}
        <a onClick={() => window.open(`/item/${review.itemId}`)}>
          {review.item.brand} {review.item.model}
        </a>
      </p>
    </div>
  )
}

export default Review
