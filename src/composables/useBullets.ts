
import { promiseTimeout } from "@vueuse/core"
import { MAX_AMMO, RELOADING_TIME } from "~/config"
import { isGameStart } from "./useGameState"

const currentAmmo = ref(MAX_AMMO)
const isReloading = ref(false)
const firingBullets = useDebounceFn(() => {
    currentAmmo.value -= 1
}, 500, { maxWait: 500 })


watch(() => currentAmmo.value, async (ammo) => {
    if (ammo === 0) {
        isReloading.value = true
        await promiseTimeout(RELOADING_TIME)
        isReloading.value = false
        resetAmmo()
    }
})

export const useAmmo = () => {
    useEventListener(document, 'keydown', (evt) => {
        const { code } = evt
        if (code === 'KeyJ' && currentAmmo.value > 0 && isGameStart.value) {
            firingBullets()
        }
    })
    return {
        currentAmmo,
        isReloading
    }
}

function resetAmmo() {
    currentAmmo.value = MAX_AMMO
}