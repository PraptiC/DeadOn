			var gameState6=function(game){
    			console.log("Easy_WL");
			}
			gameState6.prototype={
		    	preload : preload6,
		    	create : create6,
		    	update : update6
			}; 

		function preload6(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playAgainButton','assets/buttons/playABtn.png',75,75);
			game.load.image('modesButton','assets/buttons/modesBtn.png',75,75);

		}
		function create6(){
				game.add.image(0,0,'background');
				playAgainButton = game.add.button(300,300, 'playAgainButton', actionOnClick, this);
				modesButton = game.add.button(300,400, 'modesButton', actionOnClick, this);
				playAgainButton.onInputDown.add(playagaindown, this);
				modesButton.onInputDown.add(modesdown, this);	

			function playagaindown() {
				console.log('play again button down');
				game.state.start('gameState4');
			}

			function modesdown() {
				console.log('modes button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}
		}
		function update6(){

		}
