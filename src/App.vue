<template>
  <div class="border border-4 border-top-0 border-primary">
    <HeaderComponent class="sticky-top bo"></HeaderComponent>
    <BannerView></BannerView>
    <ActivityView></ActivityView>
    <PolicyView></PolicyView>
    <FundView></FundView>
    <ServiceView></ServiceView>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerView from '@/views/BannerView.vue';
import ActivityView from '@/views/ActivityView.vue';
import PolicyView from '@/views/PolicyView.vue';
import FundView from '@/views/FundView.vue';
import ServiceView from '@/views/ServiceView.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style>
.section-title-height {
  height: 35px;
}
@media (min-width: 992px){
  .section-title-height {
    height: 50px;
  }
}
@media (min-width: 1200px){
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
