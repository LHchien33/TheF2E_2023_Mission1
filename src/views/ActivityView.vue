<template>
  <div class="container-lg gx-lg-8 pb-7 pb-lg-50">
    <SectionTitle class="d-block mx-auto section-title-height mb-9" fill="var(--bs-dark)" viewBox="0 0 237 57"></SectionTitle>
    <!-- static layout -->
    <div class="row flex-nowrap d-none d-lg-flex">
      <div class="col-5">
        <div class="bg-light d-flex flex-column rounded-3 overflow-hidden h-100">
          <div class="overflow-hidden position-relative" style="max-height: 325px;">
            <div class="position-absolute end-0 text-light bg-secondary fw-bold d-flex justify-content-center flex-column-reverse" style="width: 74px; height: 74px;">
              <div v-for="(d, idx) in getDate(cardData[0].date, 'part')" :key="d" class="mx-auto"
                    :class="idx === 0 ? null : ['fs-2', 'lh-1']">{{ d }}<span v-if="idx === 0">.</span></div>
            </div>
            <img :src="getImgUrl(cardData[0].image)" alt="活動圖片" class="w-100 h-100 object-fit-cover">
          </div>
          <div class="p-5 triangle">
            <h4 class="fs-4 fw-bold mb-3">{{ cardData[0].title }}</h4>
            <p class="fw-medium mb-0">{{ cardData[0].content }}</p>
          </div>
        </div>
      </div>
      <div class="col-7 my-n3">
        <div v-for="(card, idx) in cardData" :key="card.id">
          <div v-if="idx !== 0" class="py-3">
            <div class="bg-light d-flex flex-row rounded-3 overflow-hidden h-100">
              <div class="overflow-hidden position-relative" style="flex: 1 0 276px;">
                <img :src="getImgUrl(card.image)" alt="活動圖片" class="w-100 h-100 object-fit-cover">
              </div>
              <div class="p-5">
                <div class="d-inline-block fw-medium text-light bg-secondary rounded-ts-be-3 py-1 px-2 mb-2">
                  {{ getDate(card.date) }}
                </div>
                <h4 class="fs-4 fw-bold mb-3">{{ card.title }}</h4>
                <p class="fw-medium mb-0">{{ card.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- swiper -->
    <ActivitySlider :card-data="cardData" class="d-lg-none"></ActivitySlider>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_activity.svg';
import ActivitySlider from '../components/ActivitySlider.vue';

const cardData = [
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

function getImgUrl(image) {
  return new URL(image, import.meta.url);
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
</script>

<style>
.triangle {
  position: relative;
}
.triangle::before {
  content: '';
  width: 0;
  height: 0;
  border: 15px solid;
  border-color: transparent transparent var(--bs-light);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}

@media (min-width: 768px){
  .triangle::before {
    border: 25px solid;
    border-color: transparent transparent var(--bs-light);
  }
}

.gx-lg-8 {
  --bs-gutter-x: 0;
}

@media (min-width: 992px){
  .gx-lg-8 {
    --bs-gutter-x: 1.5rem;
  }
}
</style>
