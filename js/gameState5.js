			var gameState5=function(game){
    			console.log("Easy_HowTo");
			}
			gameState5.prototype={
    			preload : preload5,
    			create : create5,
    			update : update5
    		};

		function preload5(){
     		game.load.image('background','assets/sky.png');

		}
		function create5(){
			console.log("Easy_Help");
			game.state.start('gameState4');
		}
		function update5(){

		}
