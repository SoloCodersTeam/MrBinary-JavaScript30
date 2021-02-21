const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d')

canvas.width = this.innerWidth
canvas.height = this.innerHeight

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = '50'
ctx.globalCompositeOperation = 'multiply'

let isDrawing = false
let hue = 0
let direction = true


function draw(e) {
    if(!isDrawing) return //stop if mouse not down

    console.log(e)

    ctx.strokeStyle = `hsl(${hue},100%,50%)`

    ctx.beginPath()
    //starts from
    ctx.moveTo(e.offsetX, e.offsetY)
    //goes to
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()

    hue++

    //preventing hue to go infinity while drawing
    if(hue >= 360)
        hue = 0
    
    // making lineWidth flip depending on size
    if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
        direction = !direction
    
    // making line goes up or down depending on direction
    if(direction)
        ctx.lineWidth++
    else
        ctx.lineWidth--
}

canvas.addEventListener('mousedown', (e) => isDrawing = true)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)








