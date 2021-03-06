// 最大子弹数
export const MAX_AMMO = 8
// 装弹时间
export const RELOADING_TIME = 3000
// 发射子弹延迟
export const FIRING_BULLETS_DELAY = 500

const { width, height } = useWindowSize()

// 初始玩家位置
export const INIT_PLAYER_POSITION = {
  x: width.value / 2 - 40,
  y: height.value * 0.8,
}
