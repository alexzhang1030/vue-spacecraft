<script setup lang="ts">
import { useAmmo, usePower } from '~/composables'
const powerDisabled = usePower()
const powerColor = computed(() => powerDisabled.value ? 'green' : 'red')
const { currentAmmo, isReloading } = useAmmo()
</script>
<template>
  <div w="140px" flex="~" justify="between" items="center">
    <div w="80px" h="56px" flex="~ col" justify="between" items="end" font="bold">
      <span text="30px" h="32px" leading="40px" :style="{ fontSize: isReloading ? '24px' : '32px' }">{{
        isReloading ? 'Reloading...' :
        currentAmmo
      }}</span>
      <span>∞</span>
    </div>
    <div w="40px" h="56px" flex="~ col" justify="center" items="center" font="bold" :style="{ color: powerColor }">
      <div v-if="powerDisabled" i-carbon:flash-filled text="18px" h="32px" />
      <div v-else i-carbon:flash text="18px" h="32px" />
      <span text="12px">K</span>
    </div>
  </div>
</template>
<style scoped>
</style>
