<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '~/store/store'
import { GameState } from '~/enums/global'

const { state } = useStore()

const isShow = computed(() => state.value === GameState.END)

</script>
<template>
  <Transition>
    <div
      v-if="isShow" class="w-[350px] h-[180px] top-[50%] left-[50%] translate-[-50%]" position="absolute"
      border="light-900 rounded-[11px] 3px" p-8 align="center"
    >
      <div text="4xl" w-full>
        Spacecraft&nbsp;&nbsp;&nbsp;Journey
      </div>
      <div text="2xl" w-full mt-8>
        tab "enter" to start
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
