			var gameState3=function(game){
    			console.log("Easy_Home");
			}
			gameState3.prototype={
    			preload : preload3,
    			create : create3,
    			update : update3
			};

		function preload3(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playButton','assets/buttons/playBtn.png',75,75);
			game.load.image('helpButton','assets/buttons/helpBtn.png',75,75);
			game.load.image('backButton','assets/buttons/backBtn.png',75,75);

		}
		function create3(){
				game.add.image(0,0,'background');
				playButton = game.add.button(200,300, 'playButton', actionOnClick, this);
				helpButton = game.add.button(300,400, 'helpButton', actionOnClick, this);
				backButton = game.add.button(400,500, 'backButton', actionOnClick, this);
				playButton.onInputDown.add(playdown, this);
				helpButton.onInputDown.add(helpdown, this);	
				backButton.onInputDown.add(backdown, this);	

			function playdown() {
				console.log('play button down');
				game.state.start('gameState4');
			}

			function helpdown() {
				console.log('help button down');
				game.state.start('gameState5');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}
		}
		function update3(){

		}
