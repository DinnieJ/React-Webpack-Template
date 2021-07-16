export const initMap = () => {
    let map = [[0,0,0,0],
               [0,0,0,0],
               [0,0,0,0],
               [0,0,0,0]]

    for(let i = 2; i <= 4; i+=2) {
        let x = Math.floor(Math.random() * 4)
        let y = Math.floor(Math.random() * 4)

        map[x][y] = 2
    }

    return map
}

export const randomGrid = (map) => {
     let emptyPosition = []
     for(let i = 0; i < 4; i++) {
         for (let j = 0; j < 4; j++) {
             if(map[i][j] == 0) {
                 emptyPosition.push({x: i, y: j})
             }
         }
     }

     const randomPosition = emptyPosition[Math.floor(Math.random() * emptyPosition.length)]

     map[randomPosition.x][randomPosition.y] = 2

     return map
}