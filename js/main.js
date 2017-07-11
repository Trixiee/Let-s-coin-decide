let rotation
let timer

function start ()  {
	$(".message-style").hide();
	$("#message").hide();
	
    let i=0;
	let j =0;

   
	let change = Math.random() < 0.5

	clearInterval(rotation)
	clearInterval(timer)



	rotation = setInterval(
		function(){ 
			circle.style = `transform: rotateY(${j++}deg)`},1);

	
	timer = setInterval(function(){

		if(change){
			circle.setAttribute("src", "images/coinhead-image.jpg")
			message="You got head"
		}else{
			circle.setAttribute("src", "images/cointail-image.png")
			message="You got tail"
		
		}
		
		change = !change

		if(++i>80*Math.random()) {

			clearInterval(timer)
			clearInterval(rotation)
			circle.style = `transform: rotateY(0deg)`
			$(".message-style").show();			
			$("#message").show();
			$("#message").text(message);

		
		}


	},360)  
	
}
