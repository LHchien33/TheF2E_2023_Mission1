<template>
  <footer class="bg-primary">
    <div class="container pt-9 pb-5 pt-lg-5 position-relative">
      <div class="position-absolute bottom-100 img-custom">
        <img class="w-100" src="../assets/images/footer_cat.png" alt="頁尾貓咪">
      </div>
      <div class="row gy-8 mb-7 align-items-center justify-content-around position-relative z-1">
        <div class="d-none d-lg-block col-lg-5">
          <a href="#">
            <Logo viewBox="0 0 236 59" fill="var(--bs-light)"></Logo>
          </a>
        </div>
        <div class="col-sm-6 col-lg-3 align-self-start">
          <h5 class="fs-9 mb-3 text-warning text-center">Menu</h5>
          <ul class="row row-cols-2 list-unstyled text-center"  @click.prevent="scrollHandler">
            <li class="col" v-for="item in navItems" :key="item">
              <a :href="item === '首頁' ? '#' : `#${item}`" class="link-light d-block link-underline-opacity-0 link-underline-opacity-100-hover">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-4 vstack align-items-center">
          <h5 class="fs-9 mb-3 text-warning">Office information</h5>
          <ul class="list-unstyled mb-0 text-light">
            <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
            <li>電話：(02) 888-5678 </li>
            <li>郵件：meowoffice@linmeow.tw</li>
          </ul>
        </div>
      </div>
      <p class="mb-0 text-light-1 text-center">版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</p>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/assets/images/logo.svg';
import { computed } from 'vue';
import { useCommonStore } from '@/stores/common';

const store = useCommonStore();
const navItems = computed(() => store.navItems);

function scrollHandler(e) {
  const destination = e.target.innerText;
  let offsetTop = 0;

  if (destination !== '首頁') {
    offsetTop = document.getElementById(destination)?.offsetTop || 0;
  }

  window.scrollTo({
    top: offsetTop - 100,
  });
}
</script>

<style scoped>
.img-custom {
  max-width: 355px;
  margin: 0 auto -58px;
  left: 0;
  right: 0;
}

@media (min-width: 576px){
  .img-custom {
    margin: unset;
    margin-bottom: -58px;
    left: 8%;
  }
}

@media (min-width: 992px){
  .img-custom {
    max-width: 450px;
    margin-bottom: -75px;
  }
}

@media (min-width: 1400px){
  .img-custom {
    max-width: 530px;
    margin-bottom: -90px;
    left: 10%;
  }
}
</style>
