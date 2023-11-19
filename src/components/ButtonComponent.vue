<template>
  <a
    :href="btnTarget"
    :class="btnStylePackage"
    class="btn border-primary border-3 fw-bold rounded-pill shadow-none"
  >
    <iconPay
      v-if="iconShow"
      :class="iconSizeClass"
      :fill="`var(--bs-${textColor})`"
      class="me-2"
      viewBox="0 0 40 40"
    ></iconPay>
    <span :class="`text-${textColor}`">
      <slot>點擊按鈕</slot>
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue';
import iconPay from '@/assets/images/icon_pay.svg';

const props = defineProps({
  btnColor: {
    default: 'primary',
  },
  btnSize: {
    default: '',
  },
  btnTarget: {
    default: '#',
  },
  iconShow: {
    default: false,
  },
  iconSizeClass: {
    default: 'icon-30',
  },
  fontSize: {
    default: 'fs-5',
  },
});

const textColor = computed(() => {
  switch (props.btnColor) {
    case 'primary':
      return 'light';
    case 'light':
      return 'primary';
    default:
      return 'light';
  }
});
const btnStylePackage = computed(() => [
  `btn-${props.btnColor}`,
  props.btnSize ? `btn-${props.btnSize}` : '',
  ...props.fontSize,
]);
</script>
