var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width= 400
canvas.height= 400



function draw() {
  draw()

setInterval(draw,30)

canvas.width=400
canvas.height=400


  var time=0 
  function draw(){
  time ++
  
  ctx.clearRect(0,0,400,400)
  
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50
    
    
   ctx.fillStyle="pink"
    let carx = time%440-40
    ctx.fillRect(carx,350,40,20)
    ctx.strokeRect(carx,350,40,20)
    
   ctx.beginPath()
   ctx.arc(carx+10,375,6,0,Math.PI*2)
   ctx.arc(carx+30,375,6,0,Math.PI*2)
   
   ctx.fillStyle="black"
   ctx.fill()
   ctx.stroke()
  ctx.beginPath()
  for(var i=0; i<10;i++){
    let pos = i*50
    ctx.moveTo(pos,0)
    ctx.lineTo(pos,400)
    ctx.fillText(pos,pos,10)
    
    ctx.moveTo(0,pos)
    ctx.lineTo(400,pos)
    ctx.fillText(pos,10,pos)
  }
  }
  ctx.strokeStyle = "rgba(0,0,0,0,1)"
  ctx.stroke()


  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(125,75)
  ctx.lineTo(275,75)
  ctx.lineTo(250,150)
  ctx.lineTo(150,150)
 
  ctx.closePath()
  
  ctx.fillStyle = "#e79954"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
  
 ctx.beginPath()
  ctx.moveTo(150,175)
  ctx.lineTo(250,175)
  ctx.lineTo(250,150)
  ctx.lineTo(150,150)
 
  ctx.closePath()
  
  ctx.fillStyle = "#873e23"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
    ctx.closePath()
  

   ctx.fillStyle = "grey"
  ctx.fillRect(150,175,50,200)
  ctx.strokeRect(150,175,50,200)
  
 
     ctx.fillStyle = "grey"
  ctx.fillRect(200,175,50,200)
  ctx.strokeRect(200,175,50,200)
  
  
  ctx.beginPath()
  ctx.moveTo(100,75)
  ctx.lineTo(200,35)
  ctx.lineTo(300,75)
  ctx.closePath()
 
  ctx.fillStyle="#8e5eff"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(200,100,20,Math.PI*2,Math.PI,true)
  ctx.lineTo(185,125)
  ctx.lineTo(215,125)
  ctx.closePath()
 
  ctx.fillStyle="#5edaff"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()

  
  ctx.beginPath()
  ctx.moveTo(200,35)
  ctx.lineTo(200,30)
  ctx.lineTo(225,30)
  ctx.lineTo(200,20)
  ctx.closePath()
  
    ctx.fillStyle="#0558ff"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
}
 
}
draw()




