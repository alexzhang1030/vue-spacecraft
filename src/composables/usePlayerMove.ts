export const usePlayerMove = () => {
    const { x, y } = useMouse()
    return {
        x,
        y
    }
}