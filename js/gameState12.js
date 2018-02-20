			var gameState12=function(game){
    			console.log("Hard_Play");
			}
			gameState12.prototype={
		    	preload : preload12,
		    	create : create12,
		    	update : update12
			}; 

		function preload12(){
     		game.load.image('background','assets/sky.png');
			
		}
		function create12(){
			console.log('Hard_Play');
			game.state.start('gameState14');
		}
		function update12(){

		}
