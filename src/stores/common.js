import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
  const navItems = [
    '首頁',
    '候選人主張',
    '最新活動',
    '政策議題',
    '民眾服務信箱',
    '小額捐款',
  ];

  const cardsData = [
    {
      id: '01',
      image: '../assets/images/activity_01.jpg',
      title: '參與台北寵物論壇 爭取貓咪友善環境',
      content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
      date: '1703548800',
    },
    {
      id: '02',
      image: '../assets/images/activity_02.jpg',
      title: '帶著你的貓耳，來和我一起走！',
      content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
      date: '1703248800',
    },
    {
      id: '03',
      image: '../assets/images/activity_03.jpg',
      title: '收容所模特兒大比拼！',
      content: '活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
      date: '1703030400',
    },
  ];

  function getImgUrl(imagePath) {
    return new URL(imagePath, import.meta.url);
  }

  function getDate(timestamp, format) {
    const time = new Date(timestamp * 1000);
    const timeValues = [
      time.getFullYear(),
      time.getMonth() + 1,
      time.getDate(),
    ];

    if (format === 'part') {
      return time.toDateString().split(' ').slice(1, 3);
    }

    return timeValues.join('.');
  }

  function throttle(f, delay = 500) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => f.apply(this, args), delay);
    };
  }

  return {
    navItems,
    cardsData,

    getImgUrl,
    getDate,
    throttle,
  };
});
