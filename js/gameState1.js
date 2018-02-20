var gameState1= function(game){
    			console.log("Home");
			}
			gameState1.prototype={
    			preload : preload1,
    			create : create1,
    			update : update1
			};
			function preload1() {

				game.load.image('background','assets/sky.png');
				game.load.image('playButton','assets/buttons/playBtn.png',75,75);
				game.load.image('quitButton','assets/buttons/quitBtn.png',75,75);
			}

			var button;
			function create1(){
				game.add.image(0,0,'background');
				playButton = game.add.button(300,300, 'playButton', actionOnClick, this);
				quitButton = game.add.button(300,400, 'quitButton', actionOnClick, this);
				playButton.onInputDown.add(playdown, this);
				quitButton.onInputDown.add(quitdown, this);	

			function playdown() {
				console.log('play button down');
				game.state.start('gameState2');
			}

			function quitdown() {
				console.log('quit button down: Go to Teknack page');
			}

			
			function actionOnClick() {
				//console.log('Button pressed');
			}
			
		}
		function update1(){

		}
