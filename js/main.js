let rotation
let timer

function start ()  {
	$(".message-container").hide();
	$("#message").hide();
	
	let i=0;
	let j =0;

	
	let change = Math.random() < 0.5

	clearInterval(rotation)
	clearInterval(timer)



	rotation = setInterval(
		function(){ 
			image.style = `transform: rotateY(${j++}deg)`},1);

	
	timer = setInterval(function(){

		if(change){
			image.setAttribute("src", "images/coinhead-image.jpg")
			message="You got head"
		}else{
			image.setAttribute("src", "images/cointail-image.png")
			message="You got tail"
			
		}
		
		change = !change

		if(++i>80*Math.random()) {

			clearInterval(timer)
			clearInterval(rotation)
			image.style = `transform: rotateY(0deg)`
			$(".message-container").show();			
			$("#message").show();
			$("#message").text(message);

			
		}


	},360)  
	
}
