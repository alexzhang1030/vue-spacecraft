<script setup lang="ts">
type Props = {
    w: number,
    h: number,
    x: number
    y: number
    el: HTMLElement
    type: 0 | 1
}
const props = defineProps<Props>()

const counter = useInterval(100)
const nowY = ref(0)
const nowX = ref(props.x)
watch(() => props.y, newY => {
    nowY.value = newY
}, {
    immediate: true
})

watch(() => counter.value, () => {
    if (counter.value === 5) {
        props.type ? (nowX.value -= 10) : (nowX.value += 10)
    }
    move()
})

function move() {
    nowY.value -= counter.value
    const { top } = props.el.children[0].getBoundingClientRect()
    if (top <= 0) {
        props.el.remove()
    }
}

onMounted(() => {
    move()
})
</script>
<template>
    <div class="playerBullet" transition="duration-125 ease-linear"
        :style="{ width: props.w + 'px', height: props.h + 'px', top: nowY + 'px', left: nowX + 'px' }" bg="red-600"
        position="absolute" shadow="xl">
    </div>
</template>