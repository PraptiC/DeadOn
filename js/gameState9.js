			var gameState9=function(game){
    			console.log("Medium_HowTo");
			}
			gameState9.prototype={
    			preload : preload9,
    			create : create9,
    			update : update9
			};

		function preload9(){
     		game.load.image('background','assets/sky.png');
			
		}
		function create9(){
			console.log('Medium_Help');
			game.state.start('gameState8');
		}
		function update9(){

		}
