function isTouching(a,b){
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      && a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
        return true; 
    }
    else{
      return false;
    }
    }
    
    function bounceOff(movintRect, fixedRec){
        if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
          fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2){
           movingRect.velocityX *= (-1);
           fixedRect.velocityX *= (-1);
         
         }
            if(movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
             fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
               movingRect.velocityY *= (-1);
               fixedRect.velocityY *= (-1);
      
        
       }
      
      }       


































































































