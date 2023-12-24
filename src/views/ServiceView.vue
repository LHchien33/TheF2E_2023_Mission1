<template>
  <div ref="ServiceView" class="container section-padding">
    <div class="animate-col row">
      <div class="col-lg-7 text-center">
        <SectionTitle class="d-block mx-auto section-title mb-7" fill="var(--bs-dark)" viewBox="0 0 356 58">
        </SectionTitle>
        <p class="fs-5 fs-lg-4 fw-bold mb-3">您的聲音，我們的行動！</p>
        <p class="fs-8 fs-lg-4 fw-medium fw-lg-bold mb-0 mx-auto" style="width: 70%">
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
        </p>
      </div>
      <div class="col-lg-5">
        <form class="w-75 mx-auto text-center" ref="form" @submit.prevent="submitHandler">
          <div class="mb-3 mb-md-7 mt-7">
            <input type="text" name="name" class="form-control form-control-lg shadow-sm bg-light" placeholder="您的姓名" />
          </div>
          <div class="mb-3 mb-md-7">
            <input type="email" name="email" class="form-control form-control-lg shadow-sm bg-light"
              placeholder="您的 Email" />
          </div>
          <div class="mb-3 mb-md-7">
            <input type="text" name="phone" class="form-control form-control-lg shadow-sm bg-light" placeholder="您的手機" />
          </div>
          <div class="mb-3 mb-md-7">
            <textarea name="suggestion" class="form-control form-control-lg shadow-sm bg-light" rows="3"
              placeholder="您的建言"></textarea>
          </div>
          <button type="submit" class="btn btn-primary border-primary border-3 fw-bold rounded-pill shadow-none text-nowrap fs-5 fs-xl-3 px-9 py-5 py-xl-7">送出建議</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_service.svg';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceView = ref(null);
onMounted(() => {
  gsap.context((self) => {
    const cols = self.selector('.animate-col');
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
      scrollTrigger: {
        trigger: ServiceView.value,
        start: 'top bottom',
        end: 'top bottom-=200px',
        scrub: 1,
      },
    });
    tl.from(cols[0], { y: 100 });
  }, ServiceView.value);
});

const emit = defineEmits(['showModal']);
function submitHandler(e) {
  const formData = new FormData(e.target);
  const inputObject = Object.fromEntries(formData);
  const hasBlank = Object.values(inputObject).includes('');

  if (hasBlank) {
    alert('請確認欄位皆已填寫 ><');
    return;
  }

  emit('showModal', 'service', {});
}
</script>

<style scoped>
.section-padding {
  padding-top: 30px;
  padding-bottom: 130px;
}

@media (min-width: 992px) {
  .section-padding {
    padding-bottom: 60px;
  }
}
</style>
