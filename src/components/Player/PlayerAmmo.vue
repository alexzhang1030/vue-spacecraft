<script setup lang="ts">
import { usePower } from '~/composables/usePower';
const powerColor = computed(() => powerDisabled.value ? 'green' : 'red')
const powerDisabled = usePower()
</script>
<template>
    <div w="90px" flex="~" justify="between" items="center">
        <div w="40px" h="56px" flex="~ col" justify="center" font="bold">
            <span text="30px" h="32px">8</span>
            <span>∞</span>
        </div>
        <div
            w="40px"
            h="56px"
            flex="~ col"
            justify="center"
            items="center"
            font="bold"
            :style="{ color: powerColor }"
        >
            <div i-carbon:flash-filled text="18px" h="32px" v-if="powerDisabled"></div>
            <div i-carbon:flash text="18px" h="32px" v-else></div>
            <span text="12px">ENTER</span>
        </div>
    </div>
</template>
<style scoped>
</style>