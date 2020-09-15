class Dog{
constructor(x,y){
var options={
isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
}
display(){
rectMode(CENTER)
}
}