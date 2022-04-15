<script setup lang="ts">
import StartModal from './StartModal.vue'
import GamePlayer from '../Player/index.vue'
import { GAME_CONTAINER_SIZE } from '~/config'
import { setGameContainerCanvas } from '~/composables/useGameContainer';

const { width, height } = GAME_CONTAINER_SIZE

const canvas = ref<HTMLCanvasElement>()
onMounted(() => {
    setGameContainerCanvas(canvas.value!)
})

</script>
<template>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
    <start-modal></start-modal>
    <game-player></game-player>
</template>
<style scoped>
</style>