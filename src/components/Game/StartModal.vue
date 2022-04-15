<script setup lang="ts">
import { isGameEnd, useGameState } from '~/composables'

const modalRef = ref<null | HTMLElement>(null)

onMounted(() => {
  useGameState()
})

</script>
<template>
  <Transition>
    <div
      v-if="isGameEnd" ref="modalRef" class="w-[340px] h-[160px] top-[50%] left-[50%] translate-[-50%]"
      position="absolute" border="light-900 rounded-[15px] 3px" p-8 align="center" font="bold"
    >
      <div text="4xl" w-full>
        Spacecraft&nbsp;Journey
      </div>
      <div text="2xl" w-full mt-5>
        Press ENTER to start
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
