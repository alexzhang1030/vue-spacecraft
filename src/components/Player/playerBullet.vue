<script setup lang="ts">
type Props = {
    w: number,
    h: number,
    x: number
    y: number
}
const props = defineProps<Props>()

const counter = useInterval(10)
const nowY = ref(0)
watch(() => props.y, newY => {
    nowY.value = newY
}, {
    immediate: true

})

watch(() => counter.value, () => {
    move()
})

function move() {
    nowY.value -= counter.value * 1
}

onMounted(() => {
    move()
})
</script>
<template>
    <div class="playerBullet" transition="duration-125 ease-linear"
        :style="{ width: props.w + 'px', height: props.h + 'px', top: nowY + 'px', left: props.x + 'px' }" bg="red-600"
        position="absolute" shadow="xl">
    </div>
</template>