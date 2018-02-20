			var gameState8=function(game){
    			console.log("Medium_Play");
			}
			gameState8.prototype={
		    	preload : preload8,
		    	create : create8,
		    	update : update8
			}; 

		function preload8(){
     		game.load.image('background','assets/sky.png');
			
		}
		function create8(){
			console.log('Medium_Play');
			game.state.start('gameState10');
		}
		function update8(){

		}
