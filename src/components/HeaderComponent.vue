<template>
  <header class="border-top border-4 border-primary bg-white shadow-sm">
    <div class="container">
      <div class="hstack">
        <a href="#" class="py-4 py-lg-6">
          <Logo class="logo-width" viewBox="0 0 236 59" fill="var(--bs-primary)"></Logo>
        </a>
        <button class="btn shadow-none d-xl-none ms-auto" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <IconHamburgerMenu></IconHamburgerMenu>
        </button>
        <div class="offcanvas-xl offcanvas-end text-bg-primary ms-xl-auto" tabindex="-1" id="offcanvasRight"
          ref="offcanvasRef" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header px-5 py-6" data-bs-theme="dark">
            <div class="offcanvas-title" id="offcanvasRightLabel">
              <Logo class="logo-width" viewBox="0 0 236 59" fill="var(--bs-light)"></Logo>
            </div>
            <button type="button" class="btn-close" @click="offcanvasRight.hide()"
              aria-label="Close"></button>
          </div>
          <nav class="offcanvas-body px-5 px-xl-0 py-0">
            <ul class="list-unstyled mb-0 d-xl-flex" @click.prevent="scrollHandler">
              <template v-for="(item, idx) in navItems" :key="item">
                <li v-if="idx !== navItems.length - 1 && item !== '首頁'" class="text-end">
                  <a :href="`#${item}`"
                    class="text-white text-xl-dark px-xl-8 d-inline-block fw-bold fs-5 link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-primary link-offset-10"
                    :class="idx === 0 ? ['pb-4', 'py-xl-4'] : 'py-4'">{{ item }}</a>
                </li>
                <li v-else-if="item === '小額捐款'" class="d-flex my-auto justify-content-end mt-4 mt-xl-0">
                  <ButtonComponent
                    v-bind="{ btnTarget: `#${item}`, btnColor: fundBtnColor, btnSize: 'lg', iconShow: true, iconSize: 30, fontSize: 'fs-5' }"
                    class="ms-xl-8">{{ item }}</ButtonComponent>
                </li>
              </template>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import IconHamburgerMenu from '@/assets/images/icon_hamburgerMenu.svg';
import Logo from '@/assets/images/logo.svg';
import { useCommonStore } from '@/stores/common';
import { Offcanvas } from 'bootstrap';

const store = useCommonStore();
const navItems = computed(() => store.navItems);

const offcanvasRef = ref(null);
const offcanvasRight = ref({});
const fundBtnColor = ref('primary');

onMounted(() => {
  offcanvasRight.value = new Offcanvas(offcanvasRef.value);
  offcanvasRef.value.addEventListener('show.bs.offcanvas', () => {
    fundBtnColor.value = 'light';
  });
  offcanvasRef.value.addEventListener('hidden.bs.offcanvas', () => {
    fundBtnColor.value = 'primary';
  });
});

function scrollHandler(e) {
  let { target } = e;
  let destination;

  if (e.target.innerText) {
    destination = `#${e.target.innerText}`;
  } else {
    // 點到 icon 時
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
    }
    destination = target.getAttribute('href');
  }

  const offsetTop = document.querySelector(destination)?.offsetTop || 0;
  window.scrollTo({
    top: offsetTop - 100,
  });

  if (offcanvasRef.value.classList.contains('show')) {
    offcanvasRight.value.hide();
  }
}
</script>

<style scoped>
@media (max-width: 1199.98px) {
  .logo-width {
    max-width: 150px;
    height: 37px;
  }
}
</style>
