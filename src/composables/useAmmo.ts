
import { promiseTimeout } from "@vueuse/core"
import { MAX_AMMO, RELOADING_TIME } from "~/config"

const currentAmmo = ref(MAX_AMMO)
const isReloading = ref(false)

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
        if (code === 'Space' && currentAmmo.value > 0) {
            currentAmmo.value -= 1
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