<script setup lang="ts">
const props = defineProps<{ typed: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon:keyboard text-4xl inline-block />
    <p>
      You just now typed {{ props.typed }}
    </p>
    <p text-sm op50>
      <em>from route's query</em>
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
