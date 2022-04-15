
import { promiseTimeout } from "@vueuse/core"
import { MAX_AMMO, RELOADING_TIME } from "~/config"
import { isGameStart } from "./useGameState"
import PlayerBullet from '~/components/Player/playerBullet.vue'
import { render, h } from 'vue'
import { useStore } from "~/store/store"

const currentAmmo = ref(MAX_AMMO)
const isReloading = ref(false)
const bullets: HTMLElement[] = $ref([])
const firingBullets = useDebounceFn(() => {
    shootBullets()
    currentAmmo.value -= 1
}, 500, { maxWait: 500 })
const { latestBulletPosition } = useStore()


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

export const shootBullets = () => {
    const LeftBullet = genBullet(latestBulletPosition.left.value + 4, latestBulletPosition.top.value, 0)
    const RightBullet = genBullet(latestBulletPosition.right.value - 4, latestBulletPosition.top.value, 1);
    bullets.push(LeftBullet, RightBullet)
}

const genBullet = (x: number, y: number, type: 0 | 1) => {
    const container = document.createElement('div')
    const bullet = h(PlayerBullet, { x, y: y - 50, w: 2, h: 20, el: container, type })
    render(bullet, container)
    document.body.append(container)
    return container
}

export const removeBullets = (c: HTMLElement) => {
    c.remove()
}


function resetAmmo() {
    currentAmmo.value = MAX_AMMO
}