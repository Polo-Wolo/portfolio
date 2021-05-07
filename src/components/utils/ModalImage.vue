<template>
    <div class="modal-mask" :class="[showModal ? 'flex': 'hidden']">
        <div class="relative group max-w-md">
            <img src="https://picsum.photos/800/1200" alt="random" v-click-outside="onClickOutside">
            <div class="cross p-1 rounded-md" @click="onClickOutside">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vClickOutside from '@/click-outside'

export default defineComponent({
    name: "ModalImage",
    directives: {
      clickOutside: vClickOutside
    },
    data: function() {
        return {
            showModal: true
        }
    },
    methods: {
        onClickOutside: function() {
            this.showModal = false;
        }
    }
})
</script>
<style lang="scss" scoped>
.modal-mask {
  @apply items-center justify-center bg-black bg-opacity-50 w-full h-full top-0 left-0 fixed z-50;
}
.cross {
    @apply group-hover:bg-black absolute text-transparent right-4 top-4 cursor-pointer group-hover:text-white group-hover:bg-opacity-60;
}
</style>