const canvas = ref<HTMLCanvasElement>()

export const setGameContainerCanvas = (canvasElement: HTMLCanvasElement) => {
    canvas.value = canvasElement
}

export const useGameContainer2dContext = () => canvas.value?.getContext('2d')