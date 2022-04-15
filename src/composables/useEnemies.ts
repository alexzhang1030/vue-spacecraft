const emojis = ['👽', '👾', '🚀', '💣', '🔥', '💀', '🤖', '🌌', '🎃', '🌠']

const generateEnemy = () => {
    const element = document.createElement('div')
    element.innerHTML = emojis[0]
    element.classList.add('enemy')
    document.body.append(element)
}

export const generateEnemies = () => {
    for (let i = 0; i < 10; i++) {
        generateEnemy()
    }
}