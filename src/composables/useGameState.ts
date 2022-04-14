import { useEventListener } from '@vueuse/core'
import { GameState } from '~/enums/global'
import { useStore } from '~/store/store'

const store = useStore()

export const isGameStart = computed(() => store.state.value === GameState.START)
export const isGameEnd = computed(() => store.state.value === GameState.END)

export function useGameState() {
  useEventListener(document, 'keydown', (evt) => {
    const { code } = evt
    if (code === 'Enter' && isGameEnd.value)
      store.state.value = GameState.START
    if (code === 'Escape' && isGameStart.value)
      store.state.value = GameState.END
  })
}
