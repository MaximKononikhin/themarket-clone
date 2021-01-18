import { menCategory } from "../utils/constants"

type IImage = {
  id: string,
  urls: {
    100: string,
    455: string,
    670: string,
    1440: string,
    preview: string
  }
}

export type IItem = {
  addedAt: string,
  availableSearchIndexBumps: number,
  brand: string,
  brandIds: string[],
  categoryId: number,
  city: string,
  cityId: number,
  concreteCategoryId: number,
  conditionId: number,
  country: string,
  countryId: number,
  currency: {
    id: number,
    name: string,
    translations: {
      en: string,
      utf8: string
    }
  },
  currencyId: number,
  deliveryId: number,
  deliveryPrice: number,
  description: string,
  escrowAllowed: boolean,
  id: string,
  images: IImage[],
  isBestOffer: boolean,
  isExchangeable: boolean,
  likesCount: number,
  model: string,
  prettyPath: string,
  price: number,
  sexCategoryId: number,
  size: {
    eur: string,
    id: number,
    pretty: string,
    prettyDetail: string,
    us: string
  },
  sizeId: number,
  status: number,
  userId: string
}

type CategoryType = {
  title: string,
  categoriesIds: number[],
  categoriesTypes: Array<{
    name: string,
    id: number
  }>
};

export type ICategoriesList = {
  title: string,
  sex: string,
  categories: CategoryType[]
};