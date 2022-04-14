<script setup lang="ts">
import PlayerState from './PlayerState.vue';
import PlayerAmmo from './PlayerAmmo.vue';
</script>
<template>
    <div
        position="fixed"
        bottom="5%"
        flex="~"
        justify="between"
        items="center"
        box-border
        w-full
        px-15
        pb-5
    >
        <player-state></player-state>
        <player-ammo></player-ammo>
    </div>
</template>
<style scoped></style>