import { getRandomArrayElement } from './util.js';
import { createRandomIdFromRangeGenerator } from './util.js';

const USER_DESCRIPTION_COUNT = 25;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Авдей',
  'Алексей',
  'Альберт',
  'Андрей',
  'Анатолий',
  'Антон',
  'Аркадий',
  'Артур',
  'Арсений',
  'Афанасий',
  'Богдан',
  'Борис',
  'Василий',
  'Виктор',
  'Владислав',
  'Владимир',
  'Вячеслав',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

// Описание генерируемых данных:
const latestID = createRandomIdFromRangeGenerator();
const urlFotoID = createRandomIdFromRangeGenerator();
const commentFotoID = createRandomIdFromRangeGenerator();
const descriptionID = createRandomIdFromRangeGenerator();
const likesID = createRandomIdFromRangeGenerator(15, 200);
const avatarID = createRandomIdFromRangeGenerator(1, 6);

// Функция для генерации объекта описания юзера:
const createUserDescription = function () {
  return {
    id: latestID(),
    url: `photos/${urlFotoID()}.jpg`,
    description: `Text${descriptionID()}.`,
    likes: likesID(),
    comments: {
      id: commentFotoID(),
      avatar: `img/avatar-${avatarID()}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAMES),
    },
  };
};

const similarUserDescription = Array.from({ length: USER_DESCRIPTION_COUNT }, createUserDescription);

export {similarUserDescription};
