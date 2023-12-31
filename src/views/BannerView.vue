<template>
  <div class="container py-9" ref="BannerView">
    <div class="row align-items-end justify-content-between">
      <div class="col-lg-7">
        <div class="vstack justify-content-center">
          <SubTitle class="animate-col mx-auto mx-lg-0 mb-5 subtitle-width" width="100%" height="100%" viewBox="0 0 442 33"></SubTitle>
          <Title class="animate-col mb-10 title-width d-none d-lg-block" width="100%" height="100%" viewBox="0 0 691 281"></Title>
          <TitleSm class="animate-col mb-8 d-lg-none" width="100%" height="100%" viewBox="0 0 342 119"></TitleSm>
        </div>
      </div>
      <div class="col-2">
        <NameZh class="animate-col ps-10 d-none d-lg-block mb-10" style="max-width: 180px;" width="100%" height="100%" viewBox="0 0 131 431"></NameZh>
      </div>
    </div>
    <div class="row align-items-start gx-3">
      <div class="col-auto col-sm-1 col-lg-auto">
        <SubSlogan class="animate-col slogan-width" width="100%" height="100%" viewBox="0 0 56 595"></SubSlogan>
      </div>
      <div class="col">
        <div class="overflow-hidden" style="margin-right: 120px;">
          <NameEn class="animate-row d-none d-lg-block mb-9" width="100%" height="100%" viewBox="0 0 1007 123"></NameEn>
          <NameEnSm class="animate-col d-lg-none px-1 mb-12" width="70%" height="100%" viewBox="0 0 234 125"></NameEnSm>
        </div>
        <div class="position-relative">
          <div class="animate-col position-absolute end-0 bottom-100 img-offset img-candidate-width">
            <img class="d-block ms-auto w-100 mb-n7 mb-lg-0" src="../assets/images/banner_candidate.png" alt="候選人圖片">
          </div>
          <div class="animate-col position-relative bg-light px-4 py-3 px-lg-50 py-lg-10 ms-md-9 ms-lg-11 border border-3 border-lg-5 border-primary outer-shadow rounded-ts-be-80">
            <h2 class="fs-5 fs-lg-2 fs-xl-1 mb-3 mb-lg-9 fw-bold text-center">護航台灣幸福經濟 <span class="d-block d-md-inline">從照顧每一隻貓咪開始</span></h2>
            <p class="fs-8 fs-lg-4 fw-medium fw-lg-bold mb-9">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p>
            <p class="fs-8 fs-lg-4 fw-medium fw-lg-bold mb-0">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubTitle from '@/assets/images/banner_subTitle.svg';
import Title from '@/assets/images/banner_title.svg';
import TitleSm from '@/assets/images/banner_title_sm.svg';
import NameZh from '@/assets/images/banner_name_zh-tw.svg';
import NameEn from '@/assets/images/banner_name_en.svg';
import NameEnSm from '@/assets/images/banner_name_en_sm.svg';
import SubSlogan from '@/assets/images/banner_subslogan.svg';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BannerView = ref(null);
onMounted(() => {
  const mm = gsap.matchMedia(BannerView.value);
  const breakPoint = 992;

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      const { isDesktop } = context.conditions;
      const cols = context.selector('.animate-col');
      const rows = context.selector('.animate-row');
      const tl = gsap.timeline({
        defaults: { opacity: 0 },
        scrollTrigger: {
          trigger: BannerView.value,
          start: 'top top+=100px',
        },
      });

      tl.from([cols[0], cols[isDesktop ? 1 : 2], cols[7]], { y: 100 }) // 主、副標題、內容
        .from(cols[6], { y: 100 }, '<25%') // 候選人圖片
        .from(cols[isDesktop ? 3 : 5], { y: isDesktop ? 200 : 100 }, '<50%') // 中、短英文名字
        .from(rows[0], { x: 500 }, '<') // 長英文名字
        .from(cols[4], { y: -100 }, '<'); // 左標語
    },
  );
});
</script>

<style scoped>
.subtitle-width {
  width: 70%;
}
.slogan-width {
  max-width: 30px;
}
.outer-shadow {
  box-shadow: -5px 5px 0px 0px var(--bs-primary);
}
@media (min-width: 992px) {
  .subtitle-width {
    width: 60%;
  }
  .title-width {
    max-width: 700px;
  }
  .slogan-width {
    max-width: 56px;
  }
  .outer-shadow {
    box-shadow: -15px 20px 0px 0px var(--bs-primary);
  }
}

.img-candidate-width {
  width: 73%;
  max-width: 270px;
}
@media (min-width: 576px) {
  .img-candidate-width {
    width: 63%;
    max-width: 370px;
  }
}

@media (min-width: 1200px) {
  .img-candidate-width {
    width: 43%;
    max-width: 500px;
  }
}
.img-offset {
  margin-right: 0%;
}
@media (min-width:992px) {
  .img-offset {
    margin-right: 8%;
  }
}

@media (min-width:992px) {
  .img-offset {
    margin-right: 10%;
  }
}

</style>
