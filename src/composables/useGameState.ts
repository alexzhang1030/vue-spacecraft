import { useEventListener } from '@vueuse/core'
import { GameState } from '~/enums/global'
import { useStore } from '~/store/store'

const store = useStore()

export function useGameState() {
  useEventListener(document, 'keydown', (evt) => {
    const { code } = evt
    if (code === 'Enter')
      store.state.value = GameState.START

    if (code === 'Escape')
      store.state.value = GameState.END
  })
}
