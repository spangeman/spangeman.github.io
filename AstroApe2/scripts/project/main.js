
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";


runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));
	
	
	
	
	
	
	
	
	
	//I've moved this code to the event sheet
	//ToDo - somehow repeat this code for all players so they can only shoot once
	
//let bulletFired = false;

// Initialize and reset bulletFired variable outside of event listeners
// Ensures variable is set before keydown event fires
//let resetBulletFired = false;

//window.addEventListener('keydown', (event) => {
//  if (!bulletFired && !resetBulletFired && event.key == ".") {
//    const players = runtime.objects.Player.getAllInstances();
//    const player1 = players.filter(i => i.instVars.PlayerNumber === 1)[0];
//
//    if (!bulletFired) {
//      var bulletFired = runtime.objects.Bullet.createInstance('Game', player1.getImagePointX(1), player1.getImagePointY(1));
//      bulletFired.angleDegrees = 270;
//      bulletFired = true;
//      resetBulletFired = true; // Set flag to prevent firing immediately on page load
//    }
//  }
//});

//window.addEventListener('keyup', (event) => {
//if (event.key == ".") {
//  resetBulletFired = false; // Reset flag upon key release
//  }
//});











}


function Tick(runtime)
{
	playerMovement(runtime);
	
		//I've moved this code to the event sheet
	//playerShoot(runtime);
}

	//I've moved this code to the event sheet
		//I've moved this code to the event sheet
			//I've moved this code to the event sheet
				//I've moved this code to the event sheet
					//I've moved this code to the event sheet
function playerShoot(runtime) {
  const players = runtime.objects.Player.getAllInstances();
  const player1 = players.filter(i => i.instVars.PlayerNumber === 1)[0];
  const player2 = players.filter(i => i.instVars.PlayerNumber === 2)[0];
  const player3 = players.filter(i => i.instVars.PlayerNumber === 3)[0];
  const player4 = players.filter(i => i.instVars.PlayerNumber === 4)[0];

  const dt = runtime.dt;
  const keyboard = runtime.keyboard;

  // Player 1
  if (keyboard.isKeyDown("Space") && player1.instVars.canShoot) {
    player1.instVars.canShoot = false;
    var bulletFired = runtime.objects.Bullet.createInstance("Game", player1.getImagePointX(1), player1.getImagePointY(1));
    bulletFired.angleDegrees = 270;

    setTimeout(() => {
      player1.instVars.canShoot = true;
    }, 100); // 0.1 seconds delay
  }

  // Player 2
  if (keyboard.isKeyDown("KeyQ") && player2.instVars.canShoot) {
    player2.instVars.canShoot = false;
    var bulletFired2 = runtime.objects.Bullet.createInstance("Game", player2.getImagePointX(1), player2.getImagePointY(1));
    bulletFired2.angleDegrees = 270;

    setTimeout(() => {
      player2.instVars.canShoot = true;
    }, 100); // 0.1 seconds delay
  }

  // Player 3
  if (keyboard.isKeyDown("KeyU") && player3.instVars.canShoot) {
    player3.instVars.canShoot = false;
    var bulletFired3 = runtime.objects.Bullet.createInstance("Game", player3.getImagePointX(1), player3.getImagePointY(1));
    bulletFired3.angleDegrees = 270;

    setTimeout(() => {
      player3.instVars.canShoot = true;
    }, 100); // 0.1 seconds delay
  }

  // Player 4
  if (keyboard.isKeyDown("KeyR") && player4.instVars.canShoot) {
    player4.instVars.canShoot = false;
    var bulletFired4 = runtime.objects.Bullet.createInstance("Game", player4.getImagePointX(1), player4.getImagePointY(1));
    bulletFired4.angleDegrees = 270;

    setTimeout(() => {
      player4.instVars.canShoot = true;
    }, 100); // 0.1 seconds delay
  }
}

function playerMovement(runtime)
{
	const players = runtime.objects.Player.getAllInstances();
	const player1 = players.filter(i => i.instVars.PlayerNumber === 1)[0];
	const player2 = players.filter(i => i.instVars.PlayerNumber === 2)[0];
	const player3 = players.filter(i => i.instVars.PlayerNumber === 3)[0];
	const player4 = players.filter(i => i.instVars.PlayerNumber === 4)[0];
	
	const dt = runtime.dt;
	const keyboard = runtime.keyboard;
	
	// Player 1
	if(keyboard.isKeyDown("ArrowRight"))
	{
		player1.behaviors["8Direction"].simulateControl("right")
	}
	
	if(keyboard.isKeyDown("ArrowLeft"))
	{
		player1.behaviors["8Direction"].simulateControl("left")
	}
	
	if(keyboard.isKeyDown("ArrowUp"))
	{
		player1.behaviors["8Direction"].simulateControl("up")
	}
	
	if(keyboard.isKeyDown("ArrowDown"))
	{
		player1.behaviors["8Direction"].simulateControl("down")
	}

	// Player 2	
	if(keyboard.isKeyDown("KeyD"))
	{
		player2.behaviors["8Direction"].simulateControl("right")
	}
	
	if(keyboard.isKeyDown("KeyA"))
	{
		player2.behaviors["8Direction"].simulateControl("left")
	}
	
	if(keyboard.isKeyDown("KeyW"))
	{
		player2.behaviors["8Direction"].simulateControl("up")
	}
	
	if(keyboard.isKeyDown("KeyS"))
	{
		player2.behaviors["8Direction"].simulateControl("down")
	}
	
	// Player 3	
	if(keyboard.isKeyDown("KeyL"))
	{
		player3.behaviors["8Direction"].simulateControl("right")
	}
	
	if(keyboard.isKeyDown("KeyJ"))
	{
		player3.behaviors["8Direction"].simulateControl("left")
	}
	
	if(keyboard.isKeyDown("KeyI"))
	{
		player3.behaviors["8Direction"].simulateControl("up")
	}
	
	if(keyboard.isKeyDown("KeyK"))
	{
		player3.behaviors["8Direction"].simulateControl("down")
	}
	
	// Player 4	
	if(keyboard.isKeyDown("KeyH"))
	{
		player4.behaviors["8Direction"].simulateControl("right")
	}
	
	if(keyboard.isKeyDown("KeyF"))
	{
		player4.behaviors["8Direction"].simulateControl("left")
	}
	
	if(keyboard.isKeyDown("KeyT"))
	{
		player4.behaviors["8Direction"].simulateControl("up")
	}
	
	if(keyboard.isKeyDown("KeyG"))
	{
		player4.behaviors["8Direction"].simulateControl("down")
	}
}
