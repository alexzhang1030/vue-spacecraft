
import { promiseTimeout } from "@vueuse/core"
import { MAX_AMMO, RELOADING_TIME } from "~/config"
import { isGameStart } from "./useGameState"
import PlayerBullet from '~/components/Player/playerBullet.vue'
import { render, h } from 'vue'

const currentAmmo = ref(MAX_AMMO)
const isReloading = ref(false)
const bullets: HTMLElement[] = $ref([])
const firingBullets = useDebounceFn(() => {
    shootBullets()
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

const drawBullets = () => {
    const container = document.createElement('div')
    const VNode = h(PlayerBullet, { x: bullets.length * 100, y: 300, w: 5, h: 10, key: bullets.length })
    render(VNode, container)
    document.body.append(container)
    return container
}

export const removeBullets = (c: HTMLElement) => {
    c.remove()
}

export const shootBullets = () => {
    const bullet = drawBullets()
    bullets.push(bullet)
}

function resetAmmo() {
    currentAmmo.value = MAX_AMMO
}