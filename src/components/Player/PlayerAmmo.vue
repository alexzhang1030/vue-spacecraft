<script setup lang="ts">
import { usePower } from '~/composables/usePower'
const powerDisabled = usePower()
const powerColor = computed(() => powerDisabled.value ? 'green' : 'red')
</script>
<template>
  <div w="90px" flex="~" justify="between" items="center">
    <div w="40px" h="56px" flex="~ col" justify="center" font="bold">
      <span text="30px" h="32px">8</span>
      <span>∞</span>
    </div>
    <div w="40px" h="56px" flex="~ col" justify="center" items="center" font="bold" :style="{ color: powerColor }">
      <div v-if="powerDisabled" i-carbon:flash-filled text="18px" h="32px" />
      <div v-else i-carbon:flash text="18px" h="32px" />
      <span text="12px">ENTER</span>
    </div>
  </div>
</template>
<style scoped>
</style>
