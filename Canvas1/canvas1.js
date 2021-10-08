window.addEventListener('load',()=>{
    const canvas=document.getElementById('canvas')
    const ctx=canvas.getContext('2d')
    ctx.fillStyle="black"
    ctx.strokeRect(100,100,300,200)
    
    //ctx.fillrect()
    ctx.beginPath()
    ctx.arc(250,200,50,0,360)
    ctx.stroke()
    //ctx.fillStyle='white'
})