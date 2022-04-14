<script setup lang="ts">import { useStore } from '~/store/store';

const store = useStore()
const perHp = computed(() => store.hp.value + '%')
</script>
<template>
    <div>
        <div w="130px" flex="~" justify="between">
            <div>level: 1</div>
            <div>score: 0</div>
        </div>
        <div w="130px" h="20px" flex="~" justify="between" items="center">
            <div w="80px" rounded="20px" h="10px" overflow="hidden">
                <div :style="{ width: perHp }" h-full bg="red-500"></div>
            </div>
            <div>{{ perHp }}</div>
        </div>
    </div>
</template>
<style scoped></style>