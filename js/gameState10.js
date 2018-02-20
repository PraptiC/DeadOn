			var gameState10=function(game){
    			console.log("Medium_WL");
			}
			gameState10.prototype={
		    	preload : preload10,
		    	create : create10,
		    	update : update10
			}; 

		function preload10(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playAgainButton','assets/buttons/playABtn.png',75,75);
			game.load.image('modesButton','assets/buttons/modesBtn.png',75,75);
			
		}
		function create10(){
				game.add.image(0,0,'background');
				playAgainButton = game.add.button(300,300, 'playAgainButton', actionOnClick, this);
				modesButton = game.add.button(300,400, 'modesButton', actionOnClick, this);
				playAgainButton.onInputDown.add(playagaindown, this);
				modesButton.onInputDown.add(modesdown, this);	

			function playagaindown() {
				console.log('play again button down');
				game.state.start('gameState8');
			}

			function modesdown() {
				console.log('modes button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}
		}
		function update10(){

		}
