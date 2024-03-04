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

let MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

// Генегация случайного целого числа:
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генерация ID фото пользователя:
const createID = () => {
  let latestID = 0;
  return {
    getNewID() {
      latestID += 1;
      return latestID;
    }
  };
};

const userPhotoCreateID = createID();

// Логика по поиску случайного элемента в переданном массиве:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUserDescription = function () {
  return {
    id: getRandomInteger(), // Идентификаторы не должны повторяться.
    url: `photos/${getRandomInteger(1, 25)}.jpg`, // Идентификаторы не должны повторяться.
    description: `Text${getRandomInteger(1, 25)}.`,
    likes: getRandomInteger(15, 200),
    comments: {
      id: getRandomInteger(), // Идентификаторы не должны повторяться.
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE), // необходимо взять одно или два случайных предложения из представленных.
      name: getRandomArrayElement(NAMES),
    },
  };
};

const similarUserDescription = Array.from({ length: USER_DESCRIPTION_COUNT }, createUserDescription);

console.log(similarUserDescription)

// Кексобукинг ---------------------------------------------------------------------------------------
const ADS_DESCRIPTION_COUNT = 10;
const TYPE = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ]
  const PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  const CHECK = [
    '12:00', 
    '13:00', 
    '14:00',
  ];
  const FEATURES = [
    'wifi', 
    'dishwasher', 
    'parking', 
    'washer', 
    'elevator', 
    'conditioner',
  ];

let descriptionSimilarADS = function() {
  return {
    author: {
      avatar: `img/avatars/user${getRandomInteger(1, 10).padStart(2, '0')}.png`, // 1 - 10
    },
  
    offer: {
      title: `Title${getRandomInteger()}`,
      address: ,
      price: getRandomInteger(), // random number
      type: getRandomArrayElement(TYPE), // palace, flat, house, bungalow или hotel
      rooms: getRandomInteger(), // random number
      guests: getRandomInteger(), // random number
      checkin: getRandomArrayElement(CHECK), // 12:00, 13:00 или 14:00
      checkout: getRandomArrayElement(CHECK), // 12:00, 13:00 или 14:00
      features: getRandomArrayElement(FEATURES), // 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'. Значения не должны повторяться.
      description: `Discription${getRandomInteger()}`,
      photos: getRandomArrayElement(PHOTOS),
    },
  
    location: {
      lat: parseFloat(getRandomInteger(35.65000, 35.70000).toFixed(5)), // от 35.65000 до 35.70000. 'parseFloat(randNum.toFixed(5));'
      lng: parseFloat(getRandomInteger(139.70000, 139.80000).toFixed(5)), //  от 139.70000 до 139.80000.
    },
  
  };
};
const similarDescriptionADS = Array.from({ length: ADS_DESCRIPTION_COUNT }, descriptionSimilarADS);