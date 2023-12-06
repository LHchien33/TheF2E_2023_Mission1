<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-light rounded-80 p-9 d-flex">
        <div class="modal-body text-center">
          <slot name="modal-title">
            <h4 class="fs-4">感謝您</h4>
          </slot>
          <slot name="modal-content"></slot>
          <slot name="modal-footer">
            <button type="button" class="btn btn-outline-primary border-3 fs-3 fw-bold rounded-pill py-7 px-11"
              data-bs-dismiss="modal">返回</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
