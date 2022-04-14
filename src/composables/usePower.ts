import { promiseTimeout } from '@vueuse/core'

const powerDisabled = ref<boolean>(false)

watch(
  () => powerDisabled.value,
  async(newVal) => {
    if (!newVal) {
      await promiseTimeout(1000)
      powerDisabled.value = true
    }
  },
)

export const usePower = () => {
  useEventListener(document, 'keydown', (evt) => {
    const { code } = evt
    if (code === 'Enter')
      powerDisabled.value = true
  })
  return powerDisabled
}
