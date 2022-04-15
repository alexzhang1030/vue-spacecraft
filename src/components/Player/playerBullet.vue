<script setup lang="ts">
type Props = {
    w: number,
    h: number,
    x: number
    y: number
}
const props = defineProps<Props>()
</script>
<template>
    <div class="playerBullet"
        :style="{ width: props.w + 'px', height: props.h + 'px', top: props.y + 'px', left: props.x + 'px' }"
        bg="red-600" position="absolute" shadow="xl">
    </div>
</template>