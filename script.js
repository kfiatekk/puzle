function wyswietlAlert() {
    alert("Rozłóż poniższy rysunek i ulóż go jeszcze raz");
}

document.addEventListener("DOMContentLoaded", wyswietlAlert);


const GameTiles = document.querySelectorAll('.tile')
const plansza = document.querySelector('#plansza')


const GameState = [
    [GameTiles[0],GameTiles[1],GameTiles[2]],
    [GameTiles[3], GameTiles[4],GameTiles[5]],
    [GameTiles[6],GameTiles[7],GameTiles[8]],
]

function render(plansza, GameState){

    GameState.forEach((row) => {
        row.forEach((column) => {
            plansza.appendChild(column)
        })
    })
}

plansza.addEventListener('click', (event) =>{
    const target = event.target
    console.log(target)

    let x,y
    GameState.forEach((row,rowIndex) => {
        row.forEach((column,columnIndex) => {
            if(column === target) {
                x = rowIndex
                y = columnIndex
            }
        })
    })

    let emptyX, emptyY

    GameState.forEach((row,rowIndex) => {
        row.forEach((column,columnIndex) => {
            if(column.innerText === "") {
                emptyX = rowIndex
                emptyY = columnIndex
            }
        })
    }) 

    if(y === emptyY){
        if(x + 1 === emptyX || x - 1 === emptyX){
            const temp = GameState[x][y]
            GameState[x][y] = GameState[emptyX][emptyY]
            GameState[emptyX][emptyY] = temp
            render(plansza,GameState)
        } else{
            console.log('ruch nie')
        }
    }

    if(x === emptyX){
        if(y + 1 === emptyY || y - 1 === emptyY){
            const temp = GameState[x][y]
            GameState[x][y] = GameState[emptyX][emptyY]
            GameState[emptyX][emptyY] = temp
            render(plansza,GameState)
        } else{
            console.log('ruch nie')
        }
    }

})
