
import { INIT_PLAYER_POSITION } from "~/config";
import { isGameEnd } from "./useGameState";

const mouse = {
    left: INIT_PLAYER_POSITION.x,
    top: INIT_PLAYER_POSITION.y,
    x: ref(0),
    y: ref(0)
}


export const usePlayerMove = () => {
    useEventListener(document, 'keydown', (evt) => {
        const { code } = evt
        if (isGameEnd.value) return
        switch (code) {
            case 'KeyA':
                mouse.x.value -= 10
                break;
            case 'KeyD':
                mouse.x.value += 10
                break;
            case 'KeyW':
                mouse.y.value -= 10
                break;
            case 'KeyS':
                mouse.y.value += 10
                break;
        }
    })
    return mouse
}