<template>
  <div class="border border-4 border-top-0 border-primary">
    <HeaderComponent class="sticky-top"></HeaderComponent>
    <BannerView id="候選人主張"></BannerView>
    <ActivityView id="最新活動"></ActivityView>
    <PolicyView id="政策議題"></PolicyView>
    <FundView id="小額捐款" @showModal="showModal" :modal-hidden="modalHidden"></FundView>
    <ServiceView id="民眾服務信箱" @showModal="showModal" ref="serviceView"></ServiceView>
    <FooterComponent></FooterComponent>
    <ThankYouModal ref="modalRef">
      <template #modal-title>
        <h4 class="fs-4">感謝您{{ modalData.title }}</h4>
      </template>
      <template #modal-content>
        <div v-html="modalData.content"></div>
      </template>
    </ThankYouModal>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerView from '@/views/BannerView.vue';
import ActivityView from '@/views/ActivityView.vue';
import PolicyView from '@/views/PolicyView.vue';
import FundView from '@/views/FundView.vue';
import ServiceView from '@/views/ServiceView.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ThankYouModal from '@/components/ThankYouModal.vue';
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const modalRef = ref(null);
const thankYouModal = ref({});
const modalData = ref({});
const modalHidden = ref(true);
const serviceView = ref(null);

onMounted(() => {
  const modalEl = modalRef.value.$refs.modal;
  thankYouModal.value = new Modal(modalEl);
  modalEl.addEventListener('show.bs.modal', () => {
    if (modalData.value.from === 'fund') {
      modalHidden.value = false;
    }
  });
  modalEl.addEventListener('hidden.bs.modal', () => {
    modalHidden.value = true;
    if (modalData.value.from === 'service') {
      serviceView.value.$refs.form.reset();
    }
  });
});

function showModal(from, data) {
  let amount;
  // eslint-disable-next-line default-case
  switch (from) {
    case 'fund':
      amount = data.amount.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
      modalData.value = {
        from,
        title: `成為${data.title}`,
        content: `<p class="text-primary fs-3 fw-bolder mb-n1">捐款金額</p>
        <p class="text-primary fs-3 fw-bolder mb-8">NT$${amount}</p>`,
      };
      break;
    case 'service':
      modalData.value = {
        from,
        title: '抽空給予我們寶貴的建議。',
        content: '<p class="mb-10 fw-bold">我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。</p>',
      };
      break;
  }
  thankYouModal.value.show();
}
</script>

<style>
.section-title-height {
  height: 35px;
}
@media (min-width: 992px) {
  .section-title-height {
    height: 50px;
  }
}
@media (min-width: 1200px) {
  .section-title-height {
    height: 72px;
  }
}

.btn-primary {
  --bs-btn-hover-bg: var(--bs-primary-bg-subtle);
}

.icon-30 {
  width: 30px;
  height: 30px;
}

@media (min-width: 1200px) {
  .icon-xl-40 {
    width: 40px;
    height: 40px;
  }
}
</style>
