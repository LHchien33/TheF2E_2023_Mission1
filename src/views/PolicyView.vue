<template>
  <div class="bg-primary">
    <div class="container pt-8 pb-50">
      <SectionTitle class="d-block mx-auto section-title mb-9" fill="var(--bs-light)" viewBox="0 0 236 57"></SectionTitle>
      <div class="row gy-7" ref="policyCardRow">
        <div class="col-lg-4" v-for="(card, idx) in policyCardData" :key="card.num">
          <div class="bg-light p-5 rounded-3 vstack h-100 card-max-height" :class="idx % 2 ? 'mt-lg-9' : 'mb-lg-9'"
            @mouseenter="cardHoverToggle(idx)" @mouseleave="cardHoverToggle(idx)">
            <Transition name="fade" @after-enter="setLineClamp(allOlList[idx])" @after-leave="setLineClamp(allOlList[idx])">
              <div v-if="hide !== idx+1"
                class="badge fw-medium text-light bg-secondary rounded-ts-be-3 me-auto py-1 px-2 mb-2">政策{{ card.num }}
              </div>
            </Transition>
            <h3 class="fs-5 fs-lg-4 fw-bold mb-3">{{ card.title }}</h3>
            <ol class="ps-7 fs-8 fs-xl-7 fw-medium flex-grow-1 line-clamp" :ref="(el) => allOlList.push(el)">
              <li v-for="(item, itemIdx) in card.list" :key="item[0] + itemIdx">{{ item }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_policy.svg';
import { ref, onMounted, nextTick } from 'vue';
import { useCommonStore } from '@/stores/common';

const store = useCommonStore();
const { throttle } = store;

async function setLineClamp(el) {
  const node = el;
  // init first
  node.style.webkitLineClamp = 'unset';
  node.style.marginBottom = '0px';

  await nextTick();

  const { clientHeight } = node;
  const lineHeight = window.getComputedStyle(node).lineHeight.replace('px', '');
  const maxLines = Math.floor(clientHeight / lineHeight);
  const viewH = maxLines * lineHeight;
  node.style.webkitLineClamp = `${maxLines}`;
  node.style.marginBottom = `${clientHeight - viewH}px`;
}

const policyCardRow = ref(null);
const hide = ref('');
function cardHoverToggle(idx) {
  if (policyCardRow.value.clientWidth < 960) {
    return;
  }
  hide.value = hide.value ? '' : idx + 1;
}

const allOlList = ref([]);
function allLineClampSet() {
  allOlList.value.forEach((ol) => setLineClamp(ol));
}

const policyRowWidthObserver = new ResizeObserver(throttle((entries) => {
  if (entries[0].contentRect.width >= 960) {
    allLineClampSet();
  }
}));

onMounted(() => {
  policyRowWidthObserver.observe(policyCardRow.value);
});

const policyCardData = [
  {
    num: '一',
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    list: ['設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用', '提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力', '合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論'],
  },
  {
    num: '二',
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    list: ['建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。', '推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫', '舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等'],
  },
  {
    num: '三',
    title: '推廣寵物飼養教育，讓愛更加專業',
    list: ['建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。', '推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。', '製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識'],
  },
];
</script>

<style scoped>
@media (min-width: 992px){
  .card-max-height {
    max-height: 390px;
  }
}

@media (min-width: 1400px){
  .card-max-height {
    max-height: 340px;
  }
}

.line-clamp {
  display: block;
}

@media (min-width: 992px){
  .line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  margin-bottom: -32px !important;
}</style>
