<script setup lang="ts">
import PlayerState from './PlayerState.vue'
import PlayerAmmo from './PlayerAmmo.vue'
import Player from './Player.vue'

const latestBulletsPosition = ref({
  left: 0,
  right: 0,
  top: 0
})

function getNowPlayerPosition({ left, right, top }: { left: number, right: number, top: number }) {
  latestBulletsPosition.value = {
    left,
    right,
    top
  }
}
</script>
<template>
  <player @get-now-player-position="getNowPlayerPosition" />
  <div position="fixed" bottom="5%" flex="~" justify="between" items="center" box-border w-full px-15 pb-5>
    <player-state />
    <player-ammo :left="latestBulletsPosition.left" :right="latestBulletsPosition.right"
      :top="latestBulletsPosition.top" />
  </div>
</template>
<style scoped>
</style>
