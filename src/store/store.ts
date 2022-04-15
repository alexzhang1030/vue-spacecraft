import { ref } from 'vue'
import type { Ref } from 'vue'
import { GameState } from '~/enums/global'

interface StoreValue {
  state: Ref<GameState>
  hp: Ref<number>
  latestBulletPosition: {
    left: Ref<number>
    right: Ref<number>
    top: Ref<number>
  }
}

const gameStatus = ref<GameState>(GameState.END)
const hp = ref<number>(100)

const latestBulletPosition = {
  left: ref(0),
  right: ref(0),
  top: ref(0),
}

export function useStore(): StoreValue {
  return {
    state: gameStatus,
    hp,
    latestBulletPosition
  }
}
