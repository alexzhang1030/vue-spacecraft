
import { INIT_PLAYER_POSITION } from "~/config";
import { isGameEnd } from "./useGameState";

const PlayerPosition = {
    left: INIT_PLAYER_POSITION.x,
    top: INIT_PLAYER_POSITION.y,
    x: ref(0),
    y: ref(0)
}


export const usePlayerPosition = () => {
    useEventListener(document, 'keydown', (evt) => {
        const { code } = evt
        if (isGameEnd.value) return
        switch (code) {
            case 'KeyA':
                PlayerPosition.x.value -= 10
                break;
            case 'KeyD':
                PlayerPosition.x.value += 10
                break;
            case 'KeyW':
                PlayerPosition.y.value -= 10
                break;
            case 'KeyS':
                PlayerPosition.y.value += 10
                break;
        }
    })
    return PlayerPosition
}