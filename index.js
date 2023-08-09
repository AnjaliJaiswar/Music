// Detecting button press 

for( var i=0; i<document.querySelectorAll(".key").length; i++){
              var gotTheButton = document.querySelectorAll(".key")[i];
              var callEventListener = gotTheButton.addEventListener("click", function(){
                            var buttonCliked = this.innerHTML;
                            audioDetect(buttonCliked);
                            buttonAnimation(buttonCliked);
                            
                            
              });
}


// Detecting keyboard press 

document.addEventListener("keypress",function(event){
                            audioDetect(event.key); 
                            buttonAnimation(event.key);          
});



function audioDetect(key){
              switch (key) {
                            case "a":    var key01 = new Audio("sound/key02.ogg");
                                          key01.play();
                                          break;

                            case "b":    var key02 = new Audio("sound/key04.ogg");
                                          key02.play();
                                          break;

                            case "c":    var key03 = new Audio("sound/key06.ogg");
                                          key03.play();
                                          break;

                            case "d":    var key04 = new Audio("sound/key08.ogg");
                                          key04.play();
                                          break;

                            case "e":    var key05 = new Audio("sound/key12.ogg");
                                          key05.play();
                                          break;

                            case "f":    var key06 = new Audio("sound/key14.ogg");
                                          key06.play();
                                          break;

                            case "g":    var key07 = new Audio("sound/key16.ogg");
                                          key07.play();
                                          break;

                            case "h":    var key08 = new Audio("sound/key18.ogg");
                                          key08.play();
                                          break;
              
                            case "i":    var key09 = new Audio("sound/key20.ogg");
                                          key09.play();
                                          break;
              
                            case "j":    var key10 = new Audio("sound/key22.ogg");
                                          key10.play();
                                          break;
              
                            case "k":    var key11 = new Audio("sound/key24.ogg");
                                          key11.play();
                                          break;
              
                            case "l":    var key12 = new Audio("sound/key01.ogg");
                                          key12.play();
                                          break;
              
                            case "m":    var key13 = new Audio("sound/key03.ogg");
                                          key13.play();
                                          break;
              
                            case "n":    var key14 = new Audio("sound/key05.ogg");
                                          key14.play();
                                          break;
              
                            case "o":    var key15 = new Audio("sound/key07.ogg");
                                          key15.play();
                                          break;
              
                            case "p":    var key16 = new Audio("sound/key09.ogg");
                                          key16.play();
                                          break;
              
                            case "q":    var key17 = new Audio("sound/key11.ogg");
                                          key17.play();
                                          break;
              
                            case "r":    var key18 = new Audio("sound/key13.ogg");
                                          key18.play();
                                          break;
              
                            case "s":    var key19 = new Audio("sound/key15.ogg");
                                          key19.play();
                                          break;
              
                            case "t":    var key20 = new Audio("sound/key17.ogg");
                                          key20.play();
                                          break;
              
                            case "u":    var key21 = new Audio("sound/key19.ogg");
                                          key21.play();
                                          break;
              
                            case "v":    var key22 = new Audio("sound/key21.ogg");
                                          key22.play();
                                          break;
              
                            case "w":    var key23 = new Audio("sound/key23.ogg");
                                          key23.play();
                                          break;
              
                            case "x":    var key24 = new Audio("sound/key01.ogg");
                                          key24.play();
                                          break;
              
                            case "y":    var key25 = new Audio("sound/key02.ogg");
                                          key25.play();
                                          break;
              
                            case "z":    var key26 = new Audio("sound/key03.ogg");
                                          key26.play();
                                          break;
              
                            default:      alert(" Experience musical magic by pressing keys 'A' to 'Z'! ");
                                          break;
              }
}


function buttonAnimation(currentKey){
              var activeButton = document.querySelector("."+ currentKey);
              activeButton.classList.add("keyAnimation"); 
              setTimeout(function(){
                            activeButton.classList.remove("keyAnimation");
              }, 100);
}
