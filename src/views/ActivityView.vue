<template>
  <div class="container-lg pb-9 pb-lg-50">
    <SectionTitle class="d-block mx-auto section-title-height mb-9" fill="var(--bs-dark)" viewBox="0 0 237 57"></SectionTitle>
    <div class="row">
      <div class="col-4 col-lg-5">
        <div class="bg-light d-flex flex-column rounded-3 overflow-hidden h-100">
          <div class="overflow-hidden position-relative" style="max-height: 325px;">
            <div class="position-absolute end-0 text-light bg-secondary fw-bold vstack align-items-center justify-content-center" style="width: 74px; height: 74px;">
              <span class="fs-2 lh-1">26</span>DEC.
            </div>
            <img src="../assets/images/activity_01.jpg" alt="" class="w-100 object-fit-cover">
          </div>
          <div class="p-5 triangle">
            <h4 class="fs-4 fw-bold mb-3">參與台北寵物論壇 爭取貓咪友善環境</h4>
            <p class="mb-0">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
          </div>
        </div>
      </div>
      <div class="col col-lg-7 d-flex">
        <div class="row gy-5">
          <div class="col col-lg-12">
            <div class="bg-light d-lg-flex flex-lg-row rounded-3 overflow-hidden h-100">
              <div class="overflow-hidden position-relative" style="flex: 1 0 276px;">
                <div class="d-lg-none position-absolute end-0 text-light bg-secondary fw-bold vstack align-items-center justify-content-center" style="width: 74px; height: 74px;">
                  <span class="fs-2 lh-1">26</span>DEC.
                </div>
                <img src="../assets/images/activity_02.jpg" alt="" class="w-100 h-100 object-fit-cover">
              </div>
              <div class="p-5 triangle">
                <div class="d-none d-lg-inline-block badge fw-medium text-light bg-secondary rounded-ts-be-3 me-auto py-1 px-2 mb-2">2023.12.26</div>
                <h4 class="fs-4 fw-bold mb-3">帶著你的貓耳，來和我一起走！</h4>
                <p class="mb-0">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-12">
            <div class="bg-light d-lg-flex flex-lg-row rounded-3 overflow-hidden h-100">
              <div class="overflow-hidden position-relative" style="flex: 1 0 276px;">
                <div class="d-lg-none position-absolute end-0 text-light bg-secondary fw-bold vstack align-items-center justify-content-center" style="width: 74px; height: 74px;">
                  <span class="fs-2 lh-1">26</span>DEC.
                </div>
                <img src="../assets/images/activity_03.jpg" alt="" class="w-100 h-100 object-fit-cover">
              </div>
              <div class="p-5 triangle">
                <div class="d-none d-lg-inline-block badge fw-medium text-light bg-secondary rounded-ts-be-3 me-auto py-1 px-2 mb-2">2023.12.26</div>
                <h4 class="fs-4 fw-bold mb-3">收容所模特兒大比拼！</h4>
                <p class="mb-0">活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '@/assets/images/title_activity.svg';
</script>

<style scoped>
.triangle {
  position: relative;
}
.triangle::before {
  content: '';
  width: 0;
  height: 0;
  border: 25px solid;
  border-color: transparent transparent var(--bs-light);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
</style>
