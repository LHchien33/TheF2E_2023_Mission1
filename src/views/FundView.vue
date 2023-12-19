<template>
  <div class="bg-image">
    <div class="container py-50">
      <div class="row">
        <div class="col-lg-8 col-xl-7">
          <div class="bg-light rounded-80 p-9 d-flex" style="min-height: 465px">
            <div v-if="!fundFormShow && modalHidden" class="text-center my-auto">
              <SectionTitle
                class="d-block mx-auto section-title mb-3 mb-lg-6"
                viewBox="0 0 236 58"
                fill="var(--bs-dark)"
              ></SectionTitle>
              <p class="mb-3 mb-lg-6 fs-7 fs-md-4 fw-bold text-center">
                您的小筆捐款，<span class="d-block d-sm-inline"
                  >是每隻毛孩未來的大大動力！</span
                >
              </p>
              <SubTitle
                class="subtitle-width mb-3"
                viewBox="0 0 173 34"
                fill="var(--bs-primary)"
              ></SubTitle>
              <SumAmount
                class="w-100 mb-7"
                viewBox="0 0 614 59"
                height="100%"
                fill="var(--bs-primary)"
              ></SumAmount>
              <ButtonComponent
                @click="fundFormShow = true"
                class="px-9 py-5 py-xl-7"
                v-bind="{
                  btnTarget: null,
                  btnColor: 'primary',
                  iconShow: true,
                  iconSizeClass: ['icon-30', 'icon-xl-40'],
                  fontSize: ['fs-5', 'fs-xl-3'],
                }"
                >前往捐款</ButtonComponent
              >
            </div>
            <form v-else @submit.prevent="submitHandler" class="my-auto">
              <h4 class="fs-5 fs-lg-4 fw-bold mb-3 text-center">
                選擇捐款方案
              </h4>
              <div class="row g-3 text-nowrap">
                <div class="col" v-for="(value, key) in projects" :key="key">
                  <label
                    :class="fundType === value ? 'border-primary' : 'border-light-1'"
                    @click="fundType = value"
                    class="vstack align-items-center py-5 px-7 border border-3 rounded-3 h-100"
                  >
                    <p class="fs-7 fs-md-5 fw-bold mb-0">{{ value }}</p>
                    <p class="mb-1 fs-4 fw-bolder text-primary">NT${{ numSeparator(key) }}</p>
                    <p class="mb-0 fs-9">已有 1000 人贊助</p>
                    <input type="radio" name="fundAmount" class="d-none" :value="key" />
                  </label>
                </div>
                <div class="col col-md-12">
                  <label
                    for="radioInput"
                    :class="fundType === '' ? 'border-primary' : 'border-light-1'"
                    @click="fundType = ''"
                    class="vstack align-items-center py-5 px-7 border border-3 rounded-3 h-100"
                  >
                    <p class="fs-7 fs-md-5 fw-bold mb-1">自訂捐款金額</p>
                    <input
                      class="form-control flex-grow-1 bg-light"
                      type="number"
                      placeholder="請輸入捐款金額"
                      v-model="customAmount"
                      ref="numberInput"
                    />
                    <input id="radioInput" type="radio" name="fundAmount" :value="customAmount" class="d-none" :checked="fundType === ''" />
                  </label>
                </div>
              </div>
              <div class="hstack flex-wrap justify-content-center">
                <ButtonComponent
                  @click="fundFormShow = false"
                  class="mt-3 px-9 py-5 py-xl-7 me-3 text-nowrap"
                  v-bind="{
                    btnTarget: null,
                    btnColor: 'light',
                    iconShow: false,
                    iconSizeClass: ['icon-30', 'icon-xl-40'],
                    fontSize: ['fs-5', 'fs-xl-3']
                  }"
                  >返回</ButtonComponent
                >
                <button
                  type="submit"
                  class="btn btn-primary border-primary border-3 fw-bold rounded-pill shadow-none mt-3 px-9 py-5 py-xl-7 text-nowrap fs-5 fs-xl-3"
                >
                  <iconPay
                    class="me-2"
                    viewBox="0 0 40 40"
                    fill="var(--bs-light)"
                  ></iconPay>
                  我要捐款
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_fund_main.svg';
import SubTitle from '@/assets/images/title_fund_sum.svg';
import SumAmount from '@/assets/images/fund_sum.svg';
import iconPay from '@/assets/images/icon_pay.svg';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ref, watch } from 'vue';

const projects = {
  600: '喵星人之友',
  6000: '喵星大使',
  60000: '喵星傳奇',
};

defineProps({
  modalHidden: Boolean,
});

const fundFormShow = ref(false);
const fundType = ref(null);
const customAmount = ref('');
const numberInput = ref(null);

watch(fundFormShow, () => {
  if (!fundFormShow.value) {
    fundType.value = null; // 初始化 focus 狀態
  }
});

watch(fundType, (newFundType, oldFundType) => {
  if (newFundType === '' && numberInput.value) {
    numberInput.value.focus(); // 自訂金額 radio、input 選取連動
  }

  if (oldFundType === '') {
    customAmount.value = '';
  }
});

const numSeparator = (num) => num.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');

const emit = defineEmits(['showModal']);
function submitHandler(e) {
  const formData = new FormData(e.target);
  const inputObject = Object.fromEntries(formData);

  if (!inputObject.fundAmount) {
    switch (fundType.value) {
      case null:
        alert('請選擇一個捐款方案');
        break;
      case '':
        alert('請輸入捐款金額');
        break;
    }
    return;
  }

  emit('showModal', 'fund', {
    title: projects[inputObject.fundAmount] || '喵星人',
    amount: numSeparator(inputObject.fundAmount),
  });
  fundFormShow.value = false;
}
</script>

<style scoped>
.subtitle-width {
  width: 125px;
}

@media (min-width: 768px) {
  .subtitle-width {
    width: 175px;
  }
}

.bg-image {
  background-image: url(../assets/images/bg_fund_sm.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (min-width: 992px) {
  .bg-image {
    background-image: url(../assets/images/bg_fund.jpg);
  }
}
</style>
