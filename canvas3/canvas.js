var events = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
var player = {
    posX: 150,
    posY: 150,
    currentDirection:"right"
}
var gameSetting = {
    gridHeight: 100,
    gridWidth: 100,
    offsetX: 100,
    offsetY: 100,
    gridX: 8,
    gridY: 8
}

window.addEventListener('load', () => {

    //x y width and height
    createChessBoard()
   
    document.addEventListener('keyup', handleDirectionChange)
})
function createChessBoard() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext("2d")
    for (let i = 0; i < gameSetting.gridX; i++) {
        for (let j = 0; j < gameSetting.gridY; j++) {
            var x = gameSetting.offsetX + i * gameSetting.gridWidth;
            var y = gameSetting.offsetY + j * gameSetting.gridHeight;
            if (j % 2 == 0 && i % 2 == 0 || j % 2 != 0 && i % 2 != 0) {
                ctx.fillStyle = "black"
                ctx.fillRect(x, y, 100, 100)

            }
            else {
                ctx.fillStyle = "brown"
                ctx.fillRect(x, y, 100, 100)
            }


        }

    }
   changePosition(player.currentDirection)
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(
        player.posX,
        player.posY,
        gameSetting.gridHeight / 3,
        0,
        360
    )
    ctx.fill()
    window.requestAnimationFrame(createChessBoard)


}
function handleDirectionChange(e) {

    e.preventDefault()
   // console.log(e.code)
    if (!events.includes(e.code))
        return
    console.log(e.code)
    console.log(player.currentDirection)
    switch (e.code) {
        case "ArrowUp":
            {
                player.currentDirection = "up"
                break;
            }
        case "ArrowDown":
            {
                player.currentDirection = "down"
                break;
            }
        case "ArrowLeft":
            {
                player.currentDirection = "left"
                break;
            }
        case "ArrowRight":
            {
                player.currentDirection = "right"
                break;
            }
            defualt: {
                break;
            }
    }
    window.requestAnimationFrame(createChessBoard)
}
function changePosition(direction) {
    if (!["left", "right", "up", "down"].includes(direction))
        return
    console.log(direction)
    var xMin=gameSetting.offsetX;
    var xMax=gameSetting.gridWidth*gameSetting.gridX+gameSetting.offsetX;
    var yMin=gameSetting.offsetY;
    var yMax=gameSetting.gridWidth*gameSetting.gridY+gameSetting.offsetY;
    
    switch (direction) {
        case "up":
            {
                if (player.posY +50<yMin) {
                    player.posY = yMax+50;
                }
                else
                    player.posY -= 1
                break;
            }
        case "down":
            {
                if (player.posY+50 >yMax) {
                    player.posY = yMin-50;


                }
                else
                    player.posY += 1
                break;
            }
        case "left":
            {
                if (player.posX +50< xMin) {
                    player.posX =xMax+50;

                }
                else
                    player.posX -= 1

                break;
            }
        case "right":
            {
                if (player.posX-50 > xMax) {
                    player.posX = gameSetting.offsetX-50;


                }
                else
                    player.posX += 1
                break;
            }
            defualt: {
                break;
            }
    }
   
}
// setInterval(function(){
//     changePosition(player.currentDirection)
//     console.log(player)
// },500)

