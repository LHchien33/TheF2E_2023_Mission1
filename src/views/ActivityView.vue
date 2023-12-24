<template>
  <div ref="ActivityView" class="container-lg gx-lg-8 pb-7 pb-lg-50">
    <SectionTitle class="animate-col d-block mx-auto section-title mb-9" fill="var(--bs-dark)" viewBox="0 0 237 57"></SectionTitle>
    <!-- static layout -->
    <div class="animate-col row flex-nowrap d-none d-lg-flex">
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
    <!-- slider -->
    <ActivitySlider class="animate-col d-lg-none"></ActivitySlider>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_activity.svg';
import ActivitySlider from '@/components/ActivitySlider.vue';
import { computed, ref, onMounted } from 'vue';
import { useCommonStore } from '@/stores/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ActivityView = ref(null);
onMounted(() => {
  const mm = gsap.matchMedia(ActivityView.value);
  const breakPoint = 992;

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      const { isDesktop } = context.conditions;
      const cols = context.selector('.animate-col');
      const tl = gsap.timeline({
        defaults: { opacity: 0 },
        scrollTrigger: {
          trigger: ActivityView.value,
          start: 'top bottom',
          end: isDesktop ? 'top bottom-=25%' : null,
          scrub: isDesktop ? 1 : null,
        },
      });
      tl.from(cols[0], { y: isDesktop ? 100 : 50 })
        .from(cols[isDesktop ? 1 : 2], { y: isDesktop ? 100 : 25 }, '<50%');
    },
  );
});

const store = useCommonStore();
const { getImgUrl, getDate } = store;
const cardData = computed(() => store.cardsData);
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
