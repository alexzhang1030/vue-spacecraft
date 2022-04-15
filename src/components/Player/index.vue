<script setup lang="ts">
import PlayerState from './PlayerState.vue'
import PlayerAmmo from './PlayerAmmo.vue'
import Player from './Player.vue'
</script>
<template>
  <player />
  <div position="fixed" bottom="5%" flex="~" justify="between" items="center" box-border w-full px-15 pb-5>
    <player-state />
    <player-ammo />
  </div>
</template>
<style scoped>
</style>
