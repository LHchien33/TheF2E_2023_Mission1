<template>
  <swiper-container
    ref="swiperContainer"
    :slides-per-view="1.25"
    pagination="true"
    centeredSlides="true"
    :breakpoints="{
      768: {
        slidesPerView: 1.75,
      }
    }"
    effect="coverflow"
    coverflow-effect-rotate="0"
    coverflow-effect-depth="50"
    coverflow-effect-slide-shadows="false"
    coverflow-effect-stretch="-25"
  >
    <swiper-slide v-for="card in cardData" :key="card.id" class="h-auto d-flex">
      <div class="bg-light rounded-3 position-relative overflow-hidden d-flex flex-column">
        <div class="overflow-hidden image-height">
          <!-- date badge -->
          <div class="position-absolute end-0 text-light bg-secondary fw-bold vstack flex-column-reverse justify-content-center" style="width: 74px; height: 74px;">
            <div v-for="(d, idx) in getDate(card.date, 'part')" :key="d" class="mx-auto"
                :class="idx === 0 ? null : ['fs-2', 'lh-1']">{{ d }}<span v-if="idx === 0">.</span></div>
          </div>
          <!-- image -->
          <img :src="getImgUrl(card.image)" alt="活動圖片" class="w-100 h-100 object-fit-cover">
        </div>
        <!-- content -->
        <div class="p-5 triangle" style="height: 180px;" ref="contentArray">
          <h4 class="fs-5 fw-bold mb-0 pb-3">{{ card.title }}</h4>
          <p class="fs-8 fw-medium mb-0 h-auto line-clamp">{{ card.content }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import * as swiper from 'swiper/element/bundle';
import { ref, onMounted, nextTick } from 'vue';

swiper.register();

const contentArray = ref([]);
const props = defineProps(['cardData']);
const cardData = JSON.parse(JSON.stringify(props.cardData));

async function setLineClamp(el) {
  const node = el;
  // init first
  node.childNodes[1].style.webkitLineClamp = 'unset';

  await nextTick();

  let { padding, lineHeight } = window.getComputedStyle(node);
  padding = padding.replace('px', '');
  lineHeight = lineHeight.replace('px', '');

  const viewH = node.clientHeight - node.childNodes[0].clientHeight - padding * 2;
  const maxLines = Math.floor(viewH / lineHeight);
  node.childNodes[1].style.webkitLineClamp = `${maxLines}`;
}

function getImgUrl(image) {
  return new URL(image, import.meta.url);
}

function getDate(timestamp, format = 'part') {
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

const swiperContainer = ref();
const swiperContainerObserver = new ResizeObserver(throttle(() => {
  contentArray.value.forEach((el) => setLineClamp(el));
}));

onMounted(() => {
  swiperContainerObserver.observe(swiperContainer.value);
});

</script>

<style scoped>
.image-height{
  height: 200px;
}
@media(min-width: 576px){
  .image-height{
    height: 250px;
  }
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

swiper-container::part(bullet-active) {
  background-color: var(--bs-primary);
}

swiper-container::part(container) {
  --swiper-pagination-bullet-size: 12px;
  --swiper-pagination-bottom: 0px;
  --swiper-pagination-bullet-inactive-color: white;
  --swiper-pagination-bullet-inactive-opacity: 1;
  padding-bottom: 44px;
}

swiper-slide {
  height: auto;
  display: flex;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: .8;
}
</style>
