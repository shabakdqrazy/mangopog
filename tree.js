class Tree
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true
		}
		
		
		
		
		this.bottomBody=Bodies.rectangle(x, y, width, height, options)
		this.width=width;
		this.height=height;
		this.image=loadImage("images/tree.png")
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y);
			
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop()
			
	}

}