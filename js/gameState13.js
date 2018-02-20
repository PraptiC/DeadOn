			var gameState13=function(game){
    			console.log("Hard_HowTo");
			}
			gameState13.prototype={
    			preload : preload13,
    			create : create13,
    			update : update13
    		};

		function preload13(){
     		game.load.image('background','assets/sky.png');

		}
		function create13(){
			console.log('Hard_Help');
			game.state.start('gameState12');
		}
		function update13(){

		}
