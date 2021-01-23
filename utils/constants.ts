import { ICategoriesList } from "../types";

export const endPoint = 'https://api.themarket.io';

export const menCategory: ICategoriesList = {
  title: 'Мужское',
  sex: 'men',
  categories: [
    {
      title: 'Обувь',
      categoriesIds: [3, 4, 5, 6, 7],
      categoriesTypes: [
        {name: 'Кроссовки', id: 3}, 
        {name: 'Ботинки', id: 4}, 
        {name: 'Кеды', id: 5}, 
        {name: 'Сандали', id: 6}, 
        {name: 'Сланцы', id: 7}
      ]
    },
    {
      title: 'Верхняя одежда',
      categoriesIds: [9, 10, 11, 12, 13, 14, 15, 16, 17, 95],
      categoriesTypes: [
        {name: 'Бомберы', id: 9}, 
        {name: 'Джинсовые куртки', id: 10}, 
        {name: 'Анораки', id: 11}, 
        {name: 'Парки', id: 12}, 
        {name: 'Ветровки', id: 13},
        {name: 'Пиджаки', id: 14},
        {name: 'Кожанные куртки', id: 15},
        {name: 'Плащи', id: 16},
        {name: 'Жилеты', id: 17},
        {name: 'Куртки', id: 95},
      ]
    },
    {
      title: 'Верх',
      categoriesIds: [19, 20, 21, 22, 23, 24, 25, 26, 27],
      categoriesTypes: [
        {name: 'Свитера', id: 19}, 
        {name: 'Кардиганы', id: 20}, 
        {name: 'Свитшоты', id: 21}, 
        {name: 'Олимпийки', id: 22}, 
        {name: 'Рубашки', id: 23},
        {name: 'Лонгсливы', id: 24},
        {name: 'Поло', id: 25},
        {name: 'Футболки', id: 26},
        {name: 'Худи', id: 27},
      ]
    },
    {
      title: 'Низ',
      categoriesIds: [29, 30, 31, 32, 33],
      categoriesTypes: [
        {name: 'Джинсы', id: 29}, 
        {name: 'Брюки', id: 30}, 
        {name: 'Шорты', id: 31}, 
        {name: 'Спортивные штаны', id: 32}, 
        {name: 'Плавки', id: 33},
      ]
    },
    {
      title: 'Аксессуары',
      categoriesIds: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
      categoriesTypes: [
        {name: 'Наручные часы', id: 35}, 
        {name: 'Шапки', id: 36}, 
        {name: 'Шарфы', id: 37}, 
        {name: 'Панамы', id: 38}, 
        {name: 'Кепки', id: 39},
        {name: 'Ремни', id: 40},
        {name: 'Нижнее белье', id: 41},
        {name: 'Носки', id: 42},
        {name: 'Солнцезащитные очки', id: 43},
        {name: 'Сумки', id: 44},
        {name: 'Рюкзаки', id: 45},
        {name: 'Кошельки', id: 46},
        {name: 'Другое', id: 47},
      ]
    },
  ]
};

export const womenCategory: ICategoriesList = {
  title: 'Женское',
  sex: 'women',
  categories: [
    {
      title: 'Обувь',
      categoriesIds: [50, 51, 52, 53, 54],
      categoriesTypes: [
        {name: 'Кроссовки', id: 50}, 
        {name: 'Ботинки', id: 51}, 
        {name: 'Кеды', id: 52}, 
        {name: 'Сандали', id: 53}, 
        {name: 'Сланцы', id: 54}
      ]
    },
    {
      title: 'Верхняя одежда',
      categoriesIds: [56, 57, 58, 59, 60, 61, 62, 63, 64, 96],
      categoriesTypes: [
        {name: 'Бомберы', id: 56}, 
        {name: 'Джинсовые куртки', id: 57}, 
        {name: 'Анораки', id: 58}, 
        {name: 'Парки', id: 59}, 
        {name: 'Ветровки', id: 60},
        {name: 'Пиджаки', id: 61},
        {name: 'Кожанные куртки', id: 62},
        {name: 'Плащи', id: 63},
        {name: 'Жилеты', id: 64},
        {name: 'Куртки', id: 96},
      ]
    },
    {
      title: 'Верх',
      categoriesIds: [66, 67, 68, 69, 70, 71, 72, 73, 74, 97],
      categoriesTypes: [
        {name: 'Свитера', id: 66}, 
        {name: 'Кардиганы', id: 67}, 
        {name: 'Свитшоты', id: 68}, 
        {name: 'Олимпийки', id: 69}, 
        {name: 'Рубашки', id: 70},
        {name: 'Лонгсливы', id: 71},
        {name: 'Поло', id: 72},
        {name: 'Футболки', id: 73},
        {name: 'Худи', id: 74},
        {name: 'Платья', id: 97},
      ]
    },
    {
      title: 'Низ',
      categoriesIds: [76, 77, 78, 79, 80, 97],
      categoriesTypes: [
        {name: 'Джинсы', id: 76}, 
        {name: 'Брюки', id: 77}, 
        {name: 'Шорты', id: 78}, 
        {name: 'Спортивные штаны', id: 79}, 
        {name: 'Плавки', id: 80},
        {name: 'Юбки', id: 98},
      ]
    },
    {
      title: 'Аксессуары',
      categoriesIds: [82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
      categoriesTypes: [
        {name: 'Наручные часы', id: 82}, 
        {name: 'Шапки', id: 83}, 
        {name: 'Шарфы', id: 84}, 
        {name: 'Панамы', id: 85}, 
        {name: 'Кепки', id: 86},
        {name: 'Ремни', id: 87},
        {name: 'Нижнее белье', id: 88},
        {name: 'Носки', id: 89},
        {name: 'Солнцезащитные очки', id: 90},
        {name: 'Сумки', id: 91},
        {name: 'Рюкзаки', id: 92},
        {name: 'Кошельки', id: 93},
        {name: 'Другое', id: 94},
      ]
    },
  ]
};