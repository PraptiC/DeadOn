            var gameState4=function(game){
                console.log("Easy_Play");
            }
            gameState4.prototype={
                preload : preload4,
                create : create4,
                update : update4
            }; 

		function preload4(){
     		game.load.image('background', 'assets/sky.png');
    		game.load.image('arrow', 'assets/arrow31.png');
    		game.load.image('board','assets/target5.png');
    		game.load.image('bow','assets/bow1.png');

		}

	var arrow,sprite,i;
	var boardHit,boardHit1;
	var bulletPool;
	var score=0;

		function create4(){
			game.physics.startSystem(Phaser.Physics.ARCADE);
    		game.add.sprite(0, 0, 'background');

			diamond = game.add.group();
			diamond.enableBody = true;
     
   			boardHit = diamond.create(500, 300, 'board');
   			boardHit.scale.setTo(1,1);
			//boardHit.body.immovable = true;
			game.physics.enable(diamond, Phaser.Physics.ARCADE);
       		SHOT_DELAY = 900; // milliseconds (10 bullets/3 seconds)
    		BULLET_SPEED = 1000; // pixels/second
    		NUMBER_OF_BULLETS = 1;
    		GRAVITY = 980; // pixels/second/second

    		// Create an object representing our gun
   			// gun = game.add.sprite(50, 450, 'arrow');
			 gun = game.add.sprite(70, 450, 'bow');
		    // Set the pivot point to the center of the gun
    		gun.anchor.setTo(0.5, 0.5);

    		// Create an object pool of bullets
    		bulletPool = game.add.group();
    		for(var i = 0; i < NUMBER_OF_BULLETS; i++) {
        		// Create each bullet and add it to the group.
         		bullet = game.add.sprite(0, 0, 'arrow');
        		bulletPool.add(bullet);
				bullet.scale.setTo(2,2);
        		// Set its pivot point to the center of the bullet
        		bullet.anchor.setTo(0.5, 0.5);

        		// Enable physics on the bullet
        		game.physics.enable(bullet, Phaser.Physics.ARCADE);

        		// Set its initial state to "dead".
        		bullet.kill();
    		}
    		game.input.activePointer.x = game.width/2;
    		game.input.activePointer.y = game.height/2 - 100;
    		scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

		}
		function update4(){
			game.physics.arcade.collide(bulletPool, diamond, function(bullet, sprite) {
        		gotHit(bullet,diamond);
        		boardHit.kill();
        		// Kill the bullet
        		bullet.kill();
    			createBoard(diamond);   
    		}, null, this);

    		// Rotate all living bullets to match their trajectory
    		bulletPool.forEachAlive(function(bullet) {
        		bullet.rotation = Math.atan2(bullet.body.velocity.y, bullet.body.velocity.x);
    		});
    		gun.rotation = game.physics.arcade.angleToPointer(gun);

    		// Shoot a bullet
    		if (game.input.activePointer.isDown) {
    		    shootBullet();
    		}
}
function createBoard(diamond){
    var p =Math.random()*200;
	var g = Math.random()*200;
    for ( i = 0; i <1; i++)
    {
		boardHit = diamond.create( 500+g, 300+p ,'board');
		console.log("p:"+p +"g: "+g);
		boardHit.scale.setTo(1,1);
    }
}

function shootBullet(){
    if (this.lastBulletShotAt === undefined) lastBulletShotAt = 0;
    if (game.time.now - lastBulletShotAt < SHOT_DELAY) return;
    lastBulletShotAt = game.time.now;

    // Get a dead bullet from the pool
    var bullet = bulletPool.getFirstDead();

    // If there aren't any bullets available then don't shoot
    if (bullet === null || bullet === undefined) return;
    bullet.revive();
    bullet.checkWorldBounds = true;
    bullet.outOfBoundsKill = true;

    // Set the bullet position to the gun position.
    bullet.reset(gun.x, gun.y);
    bullet.rotation = gun.rotation;

    // Shoot it in the right direction
    bullet.body.velocity.x = Math.cos(bullet.rotation) * BULLET_SPEED;
    bullet.body.velocity.y = Math.sin(bullet.rotation) * BULLET_SPEED;
}
function gotHit(bullet,diamond){
    score += 10;
    scoreText.text = 'Score: ' + score;

    if(score>=100){
        game.state.start('gameState6');
    }
}
