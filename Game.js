class Game {
    constructor(){
  
    }
  
    getState(){
  //     var gameStateRef  = database.ref('gameState');
  //     gameStateRef.on("value",function(data){
  //        gameState = data.val();
  //     })
  // console.log(gameState)
  gameState = 0
    }
  
    // update(state){
    //   database.ref('/').update({
    //     gameState: state
    //   });
    // }
  
    play(){
    
      
        
      
        if (frameCount %60 === 0 ){
         obstacle1 = createSprite(800,350,10,40);
         obstacle1.addImage(obstacle1_img);
         obstacle1.scale = 0.2
         obstacle1.velocityX = -6
                  
           obstacleGroup.add(obstacle1)      
              
                

        
        }
        if (obstacleGroup.isTouching(player)){
          gameState = 1
        }
    }
  
    end(){
      //console.log("Game Ended");
      console.log(player.rank)
    }
  }
  