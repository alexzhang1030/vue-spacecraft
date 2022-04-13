<script setup lang="ts">
const typed = $ref('')

const router = useRouter()
const go = () => {
  if (typed)
    router.push(`/hi/${encodeURIComponent(typed)}`)
}
</script>

<template>
  <div>
    <div i-carbon:replicate text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/alexzhang1030/vido-template" target="_blank">
        Vido Template
      </a>
    </p>
    <p>
      <em text-sm op75>Just a Vite + Vue3 template</em>
    </p>

    <div py-4 />

    <input id="input" v-model="typed" placeholder="type something" type="text" autocomplete="false" p="x-4 y-2"
      w="250px" text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none"
      @keydown.enter="go">

    <div>
      <button class="m-3 text-sm btn" :disabled="!typed" @click="go">
        Go
      </button>
    </div>
  </div>
</template>
