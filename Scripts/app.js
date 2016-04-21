/// <reference path="../typings/tsd.d.ts" />
   "use strict"; 

  /*function randNum() {
        console.log(Math.floor((Math.random() * 6) + 1));
        }

        $('#rollButton').click(function(){
            randNum();            
        });*/
        
        var dice = document.getElementById(getRandom())
        var dice2 = document.getElementById(getRandom())
        
        $('#rollButton').click(function getRandom() {
            var number = (Math.floor(Math.random()*6)+1);
        });
        function highlight() {
            dice = document.getElementById(getRandom());
            dice2 = document.getElementById(getRandom());
        };
        

 



