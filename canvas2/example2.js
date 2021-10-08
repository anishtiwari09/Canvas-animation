var gameSetting = {
    gridHeight: 100,
    gridWidth: 100,
    offsetX: 100,
    offsetY: 100,
    gridX: 8,
    gridY: 8
}

window.addEventListener('load',()=>{
    let canvas=document.getElementById('canvas')
    let ctx=canvas.getContext("2d")
    // x y width and height
    createChessBoard(ctx)
})
function createChessBoard(ctx)
{
    for(let i=0;i<gameSetting.gridX;i++)
    {
        for(let j=0;j<gameSetting.gridY;j++)
        {
            let x=gameSetting.offsetX*i+gameSetting.gridWidth
            let y=gameSetting.offsetY*j +gameSetting.gridHeight;
            if(j%2==0&&i%2==0||j%2!=0&&i%2!=0)
            {
                ctx.fillStyle="black"
            ctx.fillRect(x,y,100,100)
           
        }
        else{
            ctx.fillStyle="brown"
            ctx.fillRect(x,y,100,100)
        }
    }
       
    }
}