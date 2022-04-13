import { ref } from 'vue'
import { GameState } from '~/enums/global'

const gameStatus = ref<GameState>(GameState.END)

export function useStore() {
  return {
    state: gameStatus,
  }
}
