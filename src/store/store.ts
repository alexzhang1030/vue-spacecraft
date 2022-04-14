import { ref } from 'vue'
import type { Ref } from 'vue'
import { GameState } from '~/enums/global'

interface StoreValue {
  state: Ref<GameState>
  hp: Ref<number>
}

const gameStatus = ref<GameState>(GameState.END)
const hp = ref<number>(100)

export function useStore(): StoreValue {
  return {
    state: gameStatus,
    hp,
  }
}
