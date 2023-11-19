<template>
  <div class="bg-image">
    <div class="container py-50">
      <div class="row">
        <div class="col-lg-8 col-xl-7">
          <div class="bg-light rounded-80 p-9 d-flex" style="min-height: 465px">
            <div v-if="show" class="text-center my-auto" id="fundCTA">
              <SectionTitle
                class="d-block mx-auto section-title-height mb-3 mb-lg-6"
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
                @click="show = false"
                class="px-9 py-5 py-xl-7"
                v-bind="{
                  btnTarget: '#fundType',
                  btnColor: 'primary',
                  iconShow: true,
                  iconSizeClass: ['icon-30', 'icon-xl-40'],
                  fontSize: ['fs-5', 'fs-xl-3'],
                }"
                >前往捐款</ButtonComponent
              >
            </div>
            <form v-else @submit.prevent="submitHandler" class="my-auto" id="fundType">
              <h4 class="fs-5 fs-lg-4 fw-bold mb-3 text-center">
                選擇捐款方案
              </h4>
              <div class="row g-3 text-nowrap">
                <div class="col">
                  <label
                    :class="fundType === '喵星人之友' ? 'border-primary' : 'border-light-1'"
                    @click="fundType = '喵星人之友'"
                    class="vstack align-items-center py-5 px-7 border border-3 rounded-3 h-100"
                  >
                    <p class="fs-7 fs-md-5 fw-bold mb-0">喵星人之友</p>
                    <p class="mb-1 fs-4 fw-bolder text-primary">NT$600</p>
                    <p class="mb-0 fs-9">已有 1000 人贊助</p>
                    <input type="radio" name="fundAmount" class="d-none" value="600" />
                  </label>
                </div>
                <div class="col">
                  <label
                    :class="fundType === '喵星大使' ? 'border-primary' : 'border-light-1'"
                    @click="fundType = '喵星大使'"
                    class="vstack align-items-center py-5 px-7 border border-3 rounded-3 h-100"
                  >
                    <p class="fs-7 fs-md-5 fw-bold mb-0">喵星大使</p>
                    <p class="mb-1 fs-4 fw-bolder text-primary">NT$6,000</p>
                    <p class="mb-0 fs-9">已有 1000 人贊助</p>
                    <input type="radio" name="fundAmount" class="d-none" value="6000" />
                  </label>
                </div>
                <div class="col">
                  <label
                    :class="fundType === '喵星傳奇' ? 'border-primary' : 'border-light-1'"
                    @click="fundType = '喵星傳奇'"
                    class="vstack align-items-center py-5 px-7 border border-3 rounded-3 h-100"
                  >
                    <p class="fs-7 fs-md-5 fw-bold mb-0">喵星傳奇</p>
                    <p class="mb-1 fs-4 fw-bolder text-primary">NT$60,000</p>
                    <p class="mb-0 fs-9">已有 1000 人贊助</p>
                    <input type="radio" name="fundAmount" class="d-none" value="60000" />
                  </label>
                </div>
                <div class="col">
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
                    />
                    <input id="radioInput" type="radio" name="fundAmount" :value="customAmount" class="d-none" />
                  </label>
                </div>
              </div>
              <div class="hstack flex-wrap justify-content-center">
                <ButtonComponent
                  @click="show = true"
                  class="mt-3 px-9 py-5 py-xl-7 me-3 text-nowrap"
                  v-bind="{
                    btnTarget: '#fundCTA',
                    btnColor: 'light',
                    iconShow: false,
                    iconSizeClass: ['icon-30', 'icon-xl-40'],
                    fontSize: ['fs-5', 'fs-xl-3'],
                  }"
                  >返回</ButtonComponent
                >
                <button
                  type="submit"
                  class="btn btn-primary border-primary border-3 fw-bold rounded-pill shadow-none mt-3 px-9 py-5 py-xl-7 text-nowrap fs-5 fs-xl-3"
                  data-bs-toggle="modal" data-bs-target="#thankYouModal"
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
  <!-- Modal -->
  <div class="modal fade" id="thankYouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light rounded-80 p-9 d-flex">
        <div class="modal-body text-center">
          <h4 class="fs-4">感謝您成為 {{ fundType || '喵星人 (=ↀωↀ=)' }}</h4>
          <p class="text-primary fs-3 fw-bolder mb-n1">捐款金額</p>
          <p class="text-primary fs-3 fw-bolder mb-8">NT${{ finalAmount }}</p>
          <button type="button" class="btn btn-outline-primary border-3 fs-3 fw-bold rounded-pill py-7 px-11" data-bs-dismiss="modal">返回</button>
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
import { ref, onMounted, watch } from 'vue';

const show = ref(true);
const fundType = ref('');
const customAmount = ref('');
const finalAmount = ref('');

watch(show, () => {
  if (show.value) {
    customAmount.value = '';
  }
});

function submitHandler(e) {
  const formData = new FormData(e.target);
  const inputObject = Object.fromEntries(formData);
  finalAmount.value = inputObject.fundAmount;
}

onMounted(() => {
  const thankYouModal = document.getElementById('thankYouModal');
  thankYouModal.addEventListener('hidden.bs.modal', () => {
    show.value = true;
  });
});
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
