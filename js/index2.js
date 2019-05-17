//    console.log("su puntaje jugador: corazones = "+ total_jugador_corazon+' espadas = '+total_jugador_espadas+' trebol = '+total_jugador_trebol+' diamantes = '+total_jugador_diamantes)

// var si= document.getElementById('SI');
// var no = document.getElementById('NO');
// document.getElementById("Resultado").innerHTML = Resultado_final;

// do{
     var respuesta = ''
var mazo =[]
var azar =1
var pusadas = []
var encontrada=false
/////////////////////////
var total_jugador_corazon= 0
var total_banquero_corazon= 0
var acomuladorC_jugador = []
var acomuladorC_banquero = []
var AS_corazon = 0
///////////////////////////////
var total_jugador_espadas= 0
var total_banquero_espadas= 0
var acomuladorE_jugador = []
var acomuladorE_banquero = []
var AS_espadas = 0
///////////////////////////////
var total_jugador_trebol= 0
var total_banquero_trebol= 0
var acomuladorT_jugador = []
var acomuladorT_banquero = []
var AS_trebol = 0
///////////////////////////////
var total_jugador_diamantes= 0
var total_banquero_diamantes= 0
var acomuladorD_jugador = []
var acomuladorD_banquero = []
var AS_diamantes = 0
var total_banquero_corazon = 0
/////////////////////
var respuesta = ''
////////////////FUNCIONES////////
mazo = [0, 2, 3, 4 , 5, 6, 7, 8, 9,10, 10,10, 0, 2, 3, 4 , 5, 6, 7, 8, 9,10, 10,10,  0, 2, 3, 4 , 5, 6, 7, 8, 9,10, 10,10, 0, 2, 3, 4 , 5, 6, 7, 8, 9,10, 10,10 ]

function reducir(a, b){return a + b}

function CARTAS_AZAR(){
    do {
        encontrada=false
     azar=Math.floor(Math.random() * 47 )

     if(pusadas.includes(azar)) 
     {
         encontrada=true  
                  
     } 
     
   
    }while(encontrada)
}
//////////////////////////////////
///////////////////////////////////////////
function CORAZONES(){
    if (azar>=0 && azar<=11)
    {   
        if(mazo[azar]===0){
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/corazonAS.jpg";           
              
            }
            if(N === 1){
                         
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/corazonAS.jpg";
              
            }
            if(N === 2){
                
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/corazonAS.jpg";
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/corazonAS.jpg";  
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/corazonAS.jpg";  
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/corazonAS.jpg";  
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/corazonAS.jpg";  
            }

            // console.log("Tiene un AS DE CORAZON")
            //       // var pun= prompt("Elegir valor para AS 1 Ò 11 ")
            //       window.addEventListener('load', function(){   document.getElementById("MYmodal").click();} );
            //       function get (){
            //         var selectvar = document.getElementById("Select_AS").value;      
            //         AS_corazon = parseInt(selectvar)
            //         console.log(AS_corazon)
            //        }
            //      get();
               
        } else{
            switch(azar){        
                case 9:
                if(N===0){
                    var carta1 = document.getElementById('Card');        
                 carta1.src = "../imagenes/corazonJ.jpg";
              
                }
                if(N===1){
                   
                 var carta2 = document.getElementById('Card2');        
                 carta2.src = "../imagenes/corazonJ.jpg";
                 
                }
                if(N===2){
                  
                 var carta3 = document.getElementById('Card3');        
                 carta3.src = "../imagenes/corazonJ.jpg";
                }
                if(R4 === 1){
                    var carta4 = document.getElementById('Card4');        
                 carta4.src = "../imagenes/corazonJ.jpg";
              
                }
                if(R5===1){
                   
                 var carta5 = document.getElementById('Card5');        
                 carta5.src = "../imagenes/corazonJ.jpg";
                 
                }
                if(R6===1){
                  
                 var carta6 = document.getElementById('Card6');        
                 carta6.src = "../imagenes/corazonJ.jpg";
                }
                if(R7===1){
                  
                    var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/corazonJ.jpg";
                   }
                console.log("J DE CORAZON");                                    
                break;         
                case 10:
                if(N===0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazonQ.jpg";
                   
                }
                if(N===1){
                    
                    var carta2 = document.getElementById('Card2');        
                     carta2.src = "../imagenes/corazonQ.jpg";
                  
                }
                if(N===2){
                  
                     var carta3 = document.getElementById('Card3');        
                     carta3.src = "../imagenes/corazonQ.jpg";
                }
                if(R4===1){
                    var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/corazonQ.jpg";
                   
                }
                if(R5===1){
                    var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/corazonQ.jpg";
                   
                }
                if(R6===1){
                    var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/corazonQ.jpg";
                   
                }
                if(R7===1){
                    var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/corazonQ.jpg";
                   
                }
                console.log("Q DE CORAZON");
                break;
                case 11:
               if(N===0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/corazonK.jpg";
                
               }
                if(N===1){
                   
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazonK.jpg";
                    
                }
                if(N===2){
                 
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazonK.jpg";
                }
                if(R4===1){ 
                    var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/corazonK.jpg";                  
                }
                if(R5===1){ 
                    var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/corazonK.jpg";                  
                }
                if(R6===1){ 
                    var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/corazonK.jpg";                  
                }
                if(R7===1){ 
                    var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/corazonK.jpg";                  
                }
                
                console.log("K DE CORAZON");
                break;        
                default:               
                switch(mazo[azar]){
                    case 2: 
                    if(N===0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/corazon2.jpg";
                      
                    }
                   if(N===1){
                   
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon2.jpg";
                   
                    }
                   if(N===2){
                   
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon2.jpg"; 
                    }
                    if(R4===1){
                   
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon2.jpg";
                       
                        }
                        if(R5===1){
                   
                            var carta5 = document.getElementById('Card5');        
                            carta5.src = "../imagenes/corazon2.jpg";
                           
                            }
                            
                            if(R6===1){
                   
                                var carta6 = document.getElementById('Card6');        
                                carta6.src = "../imagenes/corazon2.jpg";
                               
                                }
                                if(R7===1){
                   
                                    var carta7 = document.getElementById('Card7');        
                                    carta7.src = "../imagenes/corazon2.jpg";
                                   
                                    }
                        
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 3:
                    if(N==0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon3.png";
                   
                    }
                    if(N===1){
                      
                        var carta2 = document.getElementById('Card2');        
                        carta2.src = "../imagenes/corazon3.png";
                       
                    }
                    if(N===2){
                    
                        var carta3 = document.getElementById('Card3');        
                        carta3.src = "../imagenes/corazon3.png";  
                    }
                    if(R4===1){
                      
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon3.png";
                       
                    }
                    if(R5===1){
                      
                        var carta5 = document.getElementById('Card5');        
                        carta5.src = "../imagenes/corazon3.png";
                       
                    }
                    if(R6===1){
                      
                        var carta6 = document.getElementById('Card6');        
                        carta6.src = "../imagenes/corazon3.png";
                       
                    }
                    if(R7===1){
                      
                        var carta7 = document.getElementById('Card7');        
                        carta7.src = "../imagenes/corazon3.png";
                       
                    }
                
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 4:
                    if(N===0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon4.jpg";
                   
                    }
                    if(N===1){
                       
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon4.jpg";
                   
                    }
                    if(N===2){
                    
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon4.jpg";
                    }
                    if(R4===1){
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon4.jpg";
                        }
                        if(R5===1){
                            var carta5 = document.getElementById('Card5');        
                            carta5.src = "../imagenes/corazon4.jpg";
                            }
                            if(R6===1){
                                var carta6 = document.getElementById('Card6');        
                                carta6.src = "../imagenes/corazon4.jpg";
                                }
                                if(R7===1){
                                    var carta7 = document.getElementById('Card7');        
                                    carta7.src = "../imagenes/corazon4.jpg";
                                    }
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 5: 
                    if(N===0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon5.jpg";
                   
                    }
                    if(N===1){
                   
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon5.jpg";
                
                    }
                    if(N===2){
                 
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon5.jpg";
                    }
                    if(R4===1){
                   
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon5.jpg";
                    
                        }
                        if(R5===1){
                   
                            var carta5 = document.getElementById('Card5');        
                            carta5.src = "../imagenes/corazon5.jpg";
                        
                            }
                            if(R6===1){
                   
                                var carta6 = document.getElementById('Card6');        
                                carta6.src = "../imagenes/corazon5.jpg";
                            
                                }
                                if(R7===1){
                   
                                    var carta7 = document.getElementById('Card7');        
                                    carta7.src = "../imagenes/corazon5.jpg";
                                
                                    }

                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 6:
                    if(N===0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/corazon6.png";
                   ;
                    }
                   if(N===1){
                   
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon6.png";
                  
                   }
                   if(N===2){
                  
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon6.png";
                   }
                   if(R4===1){
                   
                    var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/corazon6.png";
                  
                   }
                   if(R5===1){
                   
                    var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/corazon6.png";
                  
                   }
                   if(R6===1){
                   
                    var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/corazon6.png";
                  
                   }
                   if(R7===1){
                   
                    var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/corazon6.png";
                  
                   }
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 7:
                    if(N=== 0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon7.png";
                 
                    }
                    if(N ===1){
                     
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon7.png";
                    
                    }
                    if(N ===2){
                     
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon7.png";
                    }
                    if(R4 ===1){
                     
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon7.png";
                        
                        }
                        if(R5 ===1){
                     
                            var carta5 = document.getElementById('Card5');        
                            carta5.src = "../imagenes/corazon7.png";
                            
                            }
                            if(R6 ===1){
                     
                                var carta6 = document.getElementById('Card6');        
                                carta6.src = "../imagenes/corazon7.png";
                                
                                }
                                if(R7 ===1){
                     
                                    var carta7 = document.getElementById('Card7');        
                                    carta7.src = "../imagenes/corazon7.png";
                                    
                                    }
                        
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 8:
                    if(N ===0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon8.png";
                   
                   
                    }
                    if(N ===1){
                  
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon8.png";
                    
                    }
                    if(N === 2){
                   
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon6.png";
                    }
                    if(R4 ===1){
                  
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/corazon8.png";
                        
                        }
                        if(R5 ===1){
                  
                            var carta5 = document.getElementById('Card5');        
                            carta5.src = "../imagenes/corazon8.png";
                            
                            }
                            if(R6 ===1){
                  
                                var carta6 = document.getElementById('Card6');        
                                carta6.src = "../imagenes/corazon8.png";
                                
                                }
                                if(R7 ===1){
                  
                                    var carta7 = document.getElementById('Card7');        
                                    carta7.src = "../imagenes/corazon8.png";
                                    
                                    }
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                    case 9:
                if(N === 0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/corazon9.jpg";
                 
                    
                }
                 if(N === 1){
                   
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/corazon9.jpg";
                 
                 }   
                 if(N === 2){
                   
                    var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/corazon9.jpg";
                 }
                 if(R4 === 1){
                   
                    var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/corazon9.jpg";
                 
                 }
                 if(R5 === 1){
                   
                    var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/corazon9.jpg";
                 
                 }
                 if(R6 === 1){
                   
                    var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/corazon9.jpg";
                 
                 }
                 if(R7 === 1){
                   
                    var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/corazon9.jpg";
                 
                 }
                    console.log(mazo[azar] + " DE CORAZON")
                    break
                }
                break;        
            }                 
      
       acomuladorC_jugador.push(mazo[azar])                                                               
       if(AS_corazon>0){
            valores= acomuladorC_jugador.reduce(reducir);; 
             total_jugador_corazon= valores + AS_corazon
            
       }
       else{
            total_jugador_corazon= acomuladorC_jugador.reduce(reducir);;

       }
    }             
}
} 
function ESPADAS(){
    if(azar>=12 && azar<=23) {
        if(mazo[azar]===0){   
            if(N=== 0 ){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espadaAS.jpg"; 
            }
            if(N===1){
             var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espadaAS.jpg"; 
            }
            if( N ===2){
             var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espadaAS.jpg"; 
            }
                   
            console.log("Tiene un AS DE ESPADAS")
            window.addEventListener('load', function(){   document.getElementById("MYmodal").click();} );
            function get(){
                      var selectvar =document.getElementById("Select_AS").value;      
                      AS_espadas = parseInt(selectvar)
                      console.log(AS_espadas)
                     }
                   get();    
    
        } else{
    switch(azar){

        case 9:
        if(N === 0){
            var carta1 = document.getElementById('Card'); 
            carta1.src = "../imagenes/espadaJ.jpg";
        }
       if(N === 1){
        var carta2 = document.getElementById('Card2'); 
        carta2.src = "../imagenes/espadaJ.jpg"; 
       }
         if(N ===2){
            var carta3 = document.getElementById('Card3'); 
        carta3.src = "../imagenes/espadaJ.jpg"; 
         }
         if(R4 === 1){
            var carta4 = document.getElementById('Card4'); 
            carta4.src = "../imagenes/espadaJ.jpg"; 
           }
           if(R5 === 1){
            var carta5 = document.getElementById('Card5'); 
            carta5.src = "../imagenes/espadaJ.jpg"; 
           }
           if(R6 === 1){
            var carta6 = document.getElementById('Card6'); 
            carta6.src = "../imagenes/espadaJ.jpg"; 
           }
           if(R7 === 1){
            var carta7 = document.getElementById('Card7'); 
            carta7.src = "../imagenes/espadaJ.jpg"; 
           }
        console.log("J DE ESPADAS");
                              
        break;

        case 10:
        if( N ===0){
            var carta1 = document.getElementById('Card'); 
        carta1.src = "../imagenes/espadaQ.jpg"; 
        }
        if( N === 1){
            var carta2 = document.getElementById('Card2'); 
            carta2.src = "../imagenes/espadaQ.jpg";
        }
        if( N === 2){
            var carta3 = document.getElementById('Card3'); 
        carta3.src = "../imagenes/espadaQ.jpg"; 
        }
        if( R4 === 1){
            var carta4 = document.getElementById('Card4'); 
            carta4.src = "../imagenes/espadaQ.jpg";
        }
        if( R5 === 1){
            var carta5 = document.getElementById('Card5'); 
            carta5.src = "../imagenes/espadaQ.jpg";
        }
        if( R6 === 1){
            var carta6 = document.getElementById('Card6'); 
            carta6.src = "../imagenes/espadaQ.jpg";
        }
        if( R7 === 1){
            var carta7 = document.getElementById('Card7'); 
            carta7.src = "../imagenes/espadaQ.jpg";
        }
        console.log("Q DE ESPADAS");
        break;

        case 11:
        if( N === 0){
            var carta1 = document.getElementById('Card'); 
            carta1.src = "../imagenes/espadaK.jpg"; 
        }
       if( N ===1){
        var carta2 = document.getElementById('Card2'); 
        carta2.src = "../imagenes/espadaK.jpg";
       }
        if( N ===2){
            var carta3 = document.getElementById('Card3'); 
        carta3.src = "../imagenes/espadaK.jpg";
        }
        if( R4 ===1){
            var carta4 = document.getElementById('Card4'); 
            carta4.src = "../imagenes/espadaK.jpg";
           }
           if( R5 ===1){
            var carta5 = document.getElementById('Card5'); 
            carta5.src = "../imagenes/espadaK.jpg";
           }
           if( R6 ===1){
            var carta6 = document.getElementById('Card6'); 
            carta6.src = "../imagenes/espadaK.jpg";
           }
           if( R7 ===1){
            var carta7 = document.getElementById('Card7'); 
            carta7.src = "../imagenes/espadaK.jpg";
           }
        console.log("K DE ESPADAS");
        break;

        default:
                        
        switch(mazo[azar]){
            case 2: 
            // if(N === 0){
                
            // }
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/espadas2.png";
            }
           if(N === 1){
            var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espadas2.png";  
            }
           if(N === 3){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espadas2.png";
            }
            if(R4 === 1){
                var carta4= document.getElementById('Card4');        
                carta4.src = "../imagenes/espadas2.png";  
                }
                if(R5 === 1){
                    var carta5= document.getElementById('Card5');        
                    carta5.src = "../imagenes/espadas2.png";  
                    }
                    if(R6 === 1){
                        var carta6= document.getElementById('Card6');        
                        carta6.src = "../imagenes/espadas2.png";  
                        }
                    if(R7 === 1){
                        var carta7= document.getElementById('Card7');        
                        carta7.src = "../imagenes/espadas2.png";  
                        }
            console.log(mazo[azar] + " DE espada")
            break
            case 3:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espadas3.png";
            }
            if(N ===1){
                var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espadas3.png";
            }
            
            if(N ===2){
                var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espadas3.png";
            }
            if(R4 ===1){
                var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espadas3.png";
            }
            if(R5 ===1){
                var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espadas3.png";
            }
            if(R6 ===1){
                var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espadas3.png";
            }
            if(R7 ===1){
                var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espadas3.png";
            }

            console.log(mazo[azar] + " DE espada")
            break
            case 4:
            if(N ===0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espada4.jpg";
            }
            if(N ===1){
                var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espada4.jpg";
            }
            if(N ===1){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/espada4.jpg";
            }
            if(R4 ===1){
                var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada4.jpg";
            }
            if(R5 ===1){
                var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada4.jpg";
            }
            if(R6 ===1){
                var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada4.jpg";
            }
            if(R7 ===1){
                var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada4.jpg";
            }

           

            console.log(mazo[azar] + " DE espada")
            break
            case 5: 
            if( N === 0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espada5.jpg";
            }
            if( N === 1){
                var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espada5.jpg";
            }
            if(N ===2){
                var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espada5.jpg";     
            }
            if( R4=== 1){
                var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada5.jpg";
            }
            if( R5=== 1){
                var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada5.jpg";
            }if( R6=== 1){
                var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada5.jpg";
            }if( R7=== 1){
                var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada5.jpg";
            }
            console.log(mazo[azar] + " DE espada")
            break
            case 6:
            if(N ===0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/espada6.png";
            }
           if(N ===1){
            var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espada5.jpg";
           }
           if(N ===2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espada5.jpg";
           }
           if(R4 ===1){
            var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada5.jpg";
           }
           if(R5 ===1){
            var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada5.jpg";
           }
           if(R6 ===1){
            var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada5.jpg";
           }
           if(R7 ===1){
            var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada5.jpg";
           }

            console.log(mazo[azar] + " DE espada")
            break
            case 7:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/espada7.jpg";
            }
           if(N === 1){
            var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espada7.jpg";
           }
           if(N === 2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espada7.jpg";
           }
           if(R4 === 1){
            var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada7.jpg";
           }
           if(R5 === 1){
            var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada7.jpg";
           }
           if(R6 === 1){
            var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada7.jpg";
           }
           if(R7 === 1){
            var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada7.jpg";
           }

            console.log(mazo[azar] + " DE espada")
            break
            case 8:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espada8.jpg";
            }
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/espada8.jpg";
            }
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espada8.jpg";
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada8.jpg";
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada8.jpg";
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada8.jpg";
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada8.jpg";
            }

            console.log(mazo[azar] + " DE espada")
            break
            case 9:
            if( N === 0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/espada9.png";
            }
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espada9.png";
            }
           if(N === 2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/espada9.png";
           }
           if(R4 === 1){
            var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espada9.png";
        }
        if(R5 === 1){
            var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espada9.png";
        }
        if(R6 === 1){
            var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espada9.png";
        }
        if(R7 === 1){
            var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espada9.png";
        }

            console.log(mazo[azar] + " DE espada")
            break
        
        }
            break;          
        }  
}
acomuladorE_jugador.push(mazo[azar])                                                               
       if(AS_espadas>0){
            valores= acomuladorE_jugador.reduce(reducir);; 
             total_jugador_espadas= valores + AS_espadas
       }
       else{
            total_jugador_espadas= acomuladorE_jugador.reduce(reducir);;
       }
}
}
function TREBOL (){
    if(azar>=24 && azar<=35) {
        if(mazo[azar]===0){ 
            if(N ===0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/trebolAS.PNG";
            } 
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/trebolAS.PNG";
            }
           if (N === 2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/trebolAS.PNG";
           }
           if(R4 === 1){
            var carta4 = document.getElementById('Card4');        
        carta4.src = "../imagenes/trebolAS.PNG";
        }
        if(R5 === 1){
            var carta5 = document.getElementById('Card5');        
        carta5.src = "../imagenes/trebolAS.PNG";
        }
        if(R6 === 1){
            var carta6 = document.getElementById('Card6');        
        carta6.src = "../imagenes/trebolAS.PNG";
        }
        if(R7 === 1){
            var carta7 = document.getElementById('Card7');        
        carta7.src = "../imagenes/trebolAS.PNG";
        }

            
            console.log("Tiene un AS DE TREBOL")
            window.addEventListener('load', function(){   document.getElementById("MYmodal").click();} );
            function get (){
              var selectvar = document.getElementById("Select_AS").value;      
              AS_trebol = parseInt(selectvar)
              console.log(AS_trebol)
             }
           get(); 
             
        } else{
    switch(azar){

        case 9:
        if(N === 0){
            var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/trebolJ.jpg";
        }
       if(N === 1){
        var carta2 = document.getElementById('Card2');        
        carta2.src = "../imagenes/trebolJ.jpg";
       }
       if(N === 2){
        var carta3 = document.getElementById('Card3');        
        carta3.src = "../imagenes/trebolJ.jpg";
       } 
       if(R4 === 1){
        var carta4 = document.getElementById('Card4');        
        carta4.src = "../imagenes/trebolJ.jpg";
       }
       if(R5 === 1){
        var carta5 = document.getElementById('Card5');        
        carta5.src = "../imagenes/trebolJ.jpg";
       }
       if(R6 === 1){
        var carta6 = document.getElementById('Card6');        
        carta6.src = "../imagenes/trebolJ.jpg";
       }
       if(R7 === 1){
        var carta7 = document.getElementById('Card7');        
        carta7.src = "../imagenes/trebolJ.jpg";
       }

        console.log("J DE TREBOL");
        break;

        case 10:
        if( N === 0){
            var carta1 = document.getElementById('Card');        
         carta1.src = "../imagenes/trebolQ.jpg";
        }
        if( N === 1){
            var carta2 = document.getElementById('Card2');        
         carta2.src = "../imagenes/trebolQ.jpg";
        }
         if(N === 2){
            var carta3 = document.getElementById('Card3');        
        carta3.src = "../imagenes/trebolQ.jpg";
         }
         if( R4 === 1){
            var carta4 = document.getElementById('Card4');        
         carta4.src = "../imagenes/trebolQ.jpg";
        }
        if( R5 === 1){
            var carta5 = document.getElementById('Card5');        
         carta5.src = "../imagenes/trebolQ.jpg";
        }
        if( R6 === 1){
            var carta6 = document.getElementById('Card6');        
         carta6.src = "../imagenes/trebolQ.jpg";
        }
        if( R7 === 1){
            var carta7 = document.getElementById('Card7');        
         carta7.src = "../imagenes/trebolQ.jpg";
        }
        console.log("Q DE TREBOL");
        break;

        case 11:
        if(N === 0){
            var carta1 = document.getElementById('Card');        
        carta1.src = "../imagenes/trebolK.jpg";
        }
        if(N ===1){
            var carta2 = document.getElementById('Card2');        
        carta2.src = "../imagenes/trebolK.jpg";
        }
        if(N ===2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/trebolK.jpg";
        }
        if(R4 ===1){
            var carta4 = document.getElementById('Card4');        
        carta4.src = "../imagenes/trebolK.jpg";
        }
        if(R5 ===1){
            var carta5 = document.getElementById('Card5');        
        carta5.src = "../imagenes/trebolK.jpg";
        }
        if(R6 ===1){
            var carta6 = document.getElementById('Card6');        
        carta6.src = "../imagenes/trebolK.jpg";
        }
        if(R7 ===1){
            var carta7 = document.getElementById('Card7');        
        carta7.src = "../imagenes/trebolK.jpg";
        }
        console.log("K DE TREBOL");
        break;

        default:
                switch(mazo[azar]){
                    case 2: 
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol2.jpg";
                    }
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/trebol2.jpg";
                    }
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/trebol2.jpg";
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/trebol2.jpg";
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/trebol2.jpg";
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/trebol2.jpg";
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/trebol2.jpg";
                    }
                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 3:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol3.jpg";
                    }
                    
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                        carta2.src = "../imagenes/trebol3.jpg";  
                    }
                   
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                        carta3.src = "../imagenes/trebol3.jpg";
                    }                   
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/trebol3.jpg";  
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                        carta5.src = "../imagenes/trebol3.jpg";  
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                        carta6.src = "../imagenes/trebol3.jpg";  
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                        carta7.src = "../imagenes/trebol3.jpg";  
                    }
                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 4:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol4.jpg";   
                    }
                   
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/trebol4.jpg";
                    }
                    
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/trebol4.jpg";
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/trebol4.jpg";
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/trebol4.jpg";
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/trebol4.jpg";
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/trebol4.jpg";
                    }
                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 5: 
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol5.jpg";  
                    }
                   
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/trebol5.jpg";  
                    }
                  
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/trebol5.jpg"; 
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/trebol5.jpg";  
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/trebol5.jpg";  
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/trebol5.jpg";  
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/trebol5.jpg";  
                    }
                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 6:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol6.jpg"; 
                    }
                    
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                        carta2.src = "../imagenes/trebol6.jpg";  
                    }
                    
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                        carta3.src = "../imagenes/trebol6.jpg"; 
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/trebol6.jpg";  
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                        carta5.src = "../imagenes/trebol6.jpg";  
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                        carta6.src = "../imagenes/trebol6.jpg";  
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                        carta7.src = "../imagenes/trebol6.jpg";  
                    }

                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 7:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol7.jpg";  
                    }
                    
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/trebol7.jpg";
                    }
                    
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                        carta3.src = "../imagenes/trebol7.jpg"; 
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/trebol7.jpg";
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                    carta5.src = "../imagenes/trebol7.jpg";
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                    carta6.src = "../imagenes/trebol7.jpg";
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                    carta7.src = "../imagenes/trebol7.jpg";
                    }
                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 8:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                        carta1.src = "../imagenes/trebol8.jpg";
                    }
                   
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                        carta2.src = "../imagenes/trebol8.jpg"; 
                    }
                    
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                    carta3.src = "../imagenes/trebol8.jpg";
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/trebol8.jpg"; 
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                        carta5.src = "../imagenes/trebol8.jpg"; 
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                        carta6.src = "../imagenes/trebol8.jpg"; 
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                        carta7.src = "../imagenes/trebol8.jpg"; 
                    }

                    console.log(mazo[azar] + " DE trebol")
                    break
                    case 9:
                    if(N === 0){
                        var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/trebol9.jpg";
                    }
                    
                    if(N === 1){
                        var carta2 = document.getElementById('Card2');        
                        carta2.src = "../imagenes/trebol9.jpg";  
                    }
                    
                    if(N === 2){
                        var carta3 = document.getElementById('Card3');        
                        carta3.src = "../imagenes/trebol9.jpg"; 
                    }
                    if(R4 === 1){
                        var carta4 = document.getElementById('Card4');        
                        carta4.src = "../imagenes/trebol9.jpg";  
                    }
                    if(R5 === 1){
                        var carta5 = document.getElementById('Card5');        
                        carta5.src = "../imagenes/trebol9.jpg";  
                    }
                    if(R6 === 1){
                        var carta6 = document.getElementById('Card6');        
                        carta6.src = "../imagenes/trebol9.jpg";  
                    }
                    if(R7 === 1){
                        var carta7 = document.getElementById('Card7');        
                        carta7.src = "../imagenes/trebol9.jpg";  
                    }

                    
                    console.log(mazo[azar] + " DE trebol")
                    break
                }
                break;             
    }}
    acomuladorT_jugador.push(mazo[azar])                                                               
    if(AS_trebol>0){
         valores= acomuladorT_jugador.reduce(reducir);; 
          total_jugador_trebol= valores + AS_trebol
    }
    else{
     total_jugador_trebol= acomuladorT_jugador.reduce(reducir);;
    }
}

}
function DIAMANTES(){
    if(azar>=36 && azar<=47) {
        if(mazo[azar]===0){
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamanteAS.jpg";
            }
           
             if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamanteAS.jpg"; 
            }
             
             if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamanteAS.jpg"; 
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamanteAS.jpg"; 
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamanteAS.jpg"; 
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamanteAS.jpg"; 
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamanteAS.jpg"; 
            }
            console.log("Tiene un AS DE DIAMANTES")     
         window.addEventListener('load', function(){   document.getElementById("MYmodal").click();} );
           function get (){
             var selectvar = document.getElementById("Select_AS").value;      
             AS_diamantes = parseInt(selectvar)
             console.log(AS_diamantes)
            }
          get();  
              
        } else{
    switch(azar){

        case 9:
        if(N === 0){
            var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/diamanteJ.jpg";      
        }
       
        if(N === 1){
            var carta2 = document.getElementById('Card2');        
            carta2.src = "../imagenes/diamanteJ.jpg";      
        }
       
        if(N === 2){
            var carta3 = document.getElementById('Card3');        
        carta3.src = "../imagenes/diamanteJ.jpg";    
        }
        if(R4 === 1){
            var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/diamanteJ.jpg";      
        }
        if(R5 === 1){
            var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/diamanteJ.jpg";      
        }
        if(R6 === 1){
            var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/diamanteJ.jpg";      
        }
        if(R7 === 1){
            var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/diamanteJ.jpg";      
        }
        console.log("J DE DIAMANTES");

        break;

        case 10:
        if(N === 0){
            var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/diamanteQ.jpg";    
        }
       
        if(N === 1){
            var carta2 = document.getElementById('Card2');        
        carta2.src = "../imagenes/diamanteQ.jpg";     
        }
       
        if(N === 2){
            var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/diamanteQ.jpg";      
        }
        if(R4 === 1){
            var carta4 = document.getElementById('Card4');        
        carta4.src = "../imagenes/diamanteQ.jpg";     
        }
        if(R5 === 1){
            var carta5 = document.getElementById('Card5');        
        carta5.src = "../imagenes/diamanteQ.jpg";     
        }
        if(R6 === 1){
            var carta6 = document.getElementById('Card6');        
        carta6.src = "../imagenes/diamanteQ.jpg";     
        }
        if(R7 === 1){
            var carta7 = document.getElementById('Card7');        
        carta7.src = "../imagenes/diamanteQ.jpg";     
        }
        
        console.log("Q DE DIAMANTES");
        break;

        case 11:
        
        if(N === 0){
            var carta1 = document.getElementById('Card');        
        carta1.src = "../imagenes/diamanteK.jpg";    
        }
        
      if(N === 1){
        var carta2 = document.getElementById('Card2');        
        carta2.src = "../imagenes/diamanteK.jpg";       
    }
      
      if(N === 2){
        var carta3 = document.getElementById('Card3');        
        carta3.src = "../imagenes/diamanteK.jpg";     
    }
    if(R4 === 1){
        var carta4 = document.getElementById('Card4');        
        carta4.src = "../imagenes/diamanteK.jpg";       
    }
    if(R5 === 1){
        var carta5 = document.getElementById('Card5');        
        carta5.src = "../imagenes/diamanteK.jpg";       
    }
    if(R6 === 1){
        var carta6 = document.getElementById('Card6');        
        carta6.src = "../imagenes/diamanteK.jpg";       
    }
    if(R7 === 1){
        var carta7 = document.getElementById('Card7');        
        carta7.src = "../imagenes/diamanteK.jpg";       
    }

        console.log("K DE DIAMANTES");
        break;

        default:
        
        switch(mazo[azar]){
            case 2: 
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante2.jpg"; 
            }
            
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante2.jpg";
            }
           
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante2.jpg";
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante2.jpg";
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante2.jpg";
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante2.jpg";
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante2.jpg";
            }

            console.log(mazo[azar] + " DE diamante")
            break
            case 3:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante3.jpg";
            }
          
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante3.jpg"; 
            }
            
            if(N === 3){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante3.jpg";  
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante3.jpg"; 
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante3.jpg"; 
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante3.jpg"; 
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante3.jpg"; 
            }
            console.log(mazo[azar] + " DE diamante")
            break
            case 4:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante4.jpg";  
            }
            
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante4.jpg";  
            }
            
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
            carta3.src = "../imagenes/diamante4.jpg";
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante4.jpg";  
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante4.jpg";  
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante4.jpg";  
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante4.jpg";  
            }

           
            console.log(mazo[azar] + " DE diamante")
            break
            case 5: 
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante5.png";
            }
           
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante5.png"; 
            }
            
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante5.png";  
            } 
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante5.png"; 
            }  
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante5.png"; 
            } 
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante5.png"; 
            } 
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante5.png"; 
            } 

            console.log(mazo[azar] + " DE diamante")
            break
            case 6:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante6.jpg";  
            }
           
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante6.jpg"; 
            }
            
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante6.jpg"; 
            } 
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante6.jpg"; 
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante6.jpg"; 
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante6.jpg"; 
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante6.jpg"; 
            }

             
            console.log(mazo[azar] + " DE diamante")
            break
            case 7:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
            carta1.src = "../imagenes/diamante7.jpg";  
            }
          
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante7.jpg";
            }
           
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante7.jpg"; 
            }
            if(R4 === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante7.jpg";
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante7.jpg";
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante7.jpg";
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante7.jpg";
            }
            console.log(mazo[azar] + " DE diamante")
            break
            case 8:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante8.jpg";   
            }
           
            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante8.jpg";  
            }
            
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante8.jpg"; 
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante8.jpg";  
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante8.jpg";  
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante8.jpg";  
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante8.jpg";  
            }

            console.log(mazo[azar] + " DE diamante")
            break
            case 9:
            if(N === 0){
                var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/diamante9.jpg";  
            }

            if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/diamante9.jpg";
            }
           
            if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/diamante9.jpg";
            }
            if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/diamante9.jpg";
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/diamante9.jpg";
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/diamante9.jpg";
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/diamante9.jpg";
            }

            console.log(mazo[azar] + " DE diamante")
            break
        }
        break;          
    }      
}
acomuladorD_jugador.push(mazo[azar])                                                               
if(AS_diamantes>0){
    var valores= acomuladorD_jugador.reduce(reducir);; 
     total_jugador_diamantes= valores + AS_diamantes
}
else{
     total_jugador_diamantes= acomuladorD_jugador.reduce(reducir);;
}

}
}
///////////////////////////
function CORAZONES_BANQUERO(){
    if (azar>=0 && azar<=11)
    {   
        if(mazo[azar]===0){
          
            console.log("Tiene un AS DE CORAZON")
                    AS_corazon = 11 
               
        } else{
            switch(azar){        
                case 9:
                console.log("J DE CORAZON");                                    
                break;         
                case 10:
                console.log("Q DE CORAZON");
                break;
                case 11:
                console.log("K DE CORAZON");
                break;        
                default:               
                console.log(mazo[azar] + " DE CORAZON")
                break;        
            }                 
       }
       acomuladorC_banquero.push(mazo[azar])                                                               
       if(AS_corazon>0){
           var valores= acomuladorC_banquero.reduce(reducir);; 
             total_banquero_corazon= valores + AS_corazon
            
       }
       else{
            total_banquero_corazon= acomuladorC_banquero.reduce(reducir);;

       }
    }             

   

}

function ESPADAS_BANQUERO(){
    if(azar>=14 && azar<=23) {
        if(mazo[azar]===0){           
            console.log("Tiene un AS DE ESPADAS")
             AS_espadas =11;
    
        } else{
    switch(azar){

        case 9:
        console.log("J DE ESPADAS");
                              
        break;

        case 10:
        console.log("Q DE ESPADAS");
      
        break;

        case 11:
      
        console.log("K DE ESPADAS");
        break;

        default:
        console.log(mazo[azar] + " DE ESPADA")
            break;        
        }  
}
acomuladorE_banquero.push(mazo[azar])                                                               
       if(AS_espadas>0){
            var valores= acomuladorE_banquero.reduce(reducir);; 
             total_banquero_espadas= valores + AS_espadas
       }
       else{
            total_banquero_espadas= acomuladorE_banquero.reduce(reducir);;
       }
}
}
function TREBOL_BANQUERO (){
    if(azar>=24 && azar<=35) {
        if(mazo[azar]===0){  
            console.log("Tiene un AS DE TREBOL")           
             AS_trebol = 11; 
             
        } else{
    switch(azar){

        case 9:
       
        console.log("J DE TREBOL");
        break;

        case 10:
     
        console.log("Q DE TREBOL");
        break;

        case 11:
       
        console.log("K DE TREBOL");
        break;

        default:
        console.log(mazo[azar] + " DE TREBOL")      
        break;        
    }}
    acomuladorT_banquero.push(mazo[azar])                                                               
    if(AS_trebol>0){
        var valores= acomuladorT_banquero.reduce(reducir);; 
          total_banquero_trebol= valores + AS_trebol
    }
    else{
     total_banquero_trebol= acomuladorT_banquero.reduce(reducir);;
    }
}

}
function DIAMANTES_BANQUERO (){
    if(azar>=36 && azar<=47) {
        if(mazo[azar]===0){
            console.log("Tiene un AS DE DIAMANTE")
              AS_diamantes =  11;
              
        } else{
    switch(azar){

        case 9:
        
        console.log("J DE DIAMANTES");

        break;

        case 10:
   
        console.log("Q DE DIAMANTES");
        break;

        case 11:
     
        console.log("K DE DIAMANTES");
        break;

        default:
        console.log(mazo[azar] + " DE DIAMANTE")       
        break;        
    }      
}
acomuladorD_banquero.push(mazo[azar])                                                               
if(AS_diamantes>0){
    var valores= acomuladorD_banquero.reduce(reducir);; 
     total_banquero_diamantes= valores + AS_diamantes
}
else{
     total_banquero_diamantes= acomuladorD_banquero.reduce(reducir);;
}

}
}
////////////////////////////////
function Reparticion(){
    CARTAS_AZAR();
    CORAZONES();
    ESPADAS();
    TREBOL();
    DIAMANTES();   
}
/////////
function Reparticion_banquero(){
    CARTAS_AZAR();
    CORAZONES_BANQUERO()
    ESPADAS_BANQUERO()
    TREBOL_BANQUERO ()
    DIAMANTES_BANQUERO ()
}
/////////////////
var Usadas =  pusadas.push(azar);

///////////////////////
for(var N=0; N<3;N++){
    Reparticion()
    Usadas 
}

var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes

respuesta = prompt('Deseas pedir otra carta')
      console.log(respuesta)
console.log('Tus resultado es : '+Resultado_final)


 if(Resultado_final<31){
        window.addEventListener('load', function(){   document.getElementById("modal_Carta").click();} );
        function getcarta(){
                  var selectvar =document.getElementById("Select_carta").value;      
                  respuesta = parseInt(selectvar)
                  console.log(respuesta)
                 }
               getcarta();  
  
   if(respuesta === 'si'){
       for(var R4 = 1; R4 <2 ; R4++){
        Reparticion()
       }
   
    Usadas
    var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
    console.log('Tus resultado es : '+Resultado_final)
    // if(Resultado_final<31){
    //     window.addEventListener('load', function(){   document.getElementById("modal_Carta").click();} );
    //     function getcarta(){
    //               var selectvar =document.getElementById("Select_carta").value;      
    //               respuesta = parseInt(selectvar)
    //               console.log(respuesta)
    //              }
    //            getcarta();  
              if(respuesta === 'si'){
    for(var R5 = 1; R5 <2 ; R5++){
        Reparticion()
    }
        
        Usadas
        var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
        console.log('Tus resultado es : '+Resultado_final)
        if(Resultado_final <31){
            respuesta = prompt('Deseas pedir otra carta')
            if(respuesta === 'si'){
                for(var R6 = 1; R6 <2 ; R6++){
                    Reparticion()
                }
                
                Usadas
                var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
                console.log('Tus resultado es : '+Resultado_final)
        
        if(Resultado_final <31){
            respuesta = prompt('Deseas pedir otra carta')
            if(respuesta === 'si'){
                for(var R7 = 1; R7 <2 ; R7++){
                    Reparticion()
                }
                
                Usadas
                var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
                console.log('Tus resultado es : '+Resultado_final)
        }
    }
    }
    }
   }
}
      
    console.log('ya salio')
      ////BANQUERO
    if(respuesta === 'no'){
        for(var N=0; N<3;N++){
            Reparticion_banquero()
            Usadas 
        }
var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

console.log('Tus resultado es : '+Resultado_final_banquero)
        if(Resultado_final_banquero < 31){
           if(Resultado_final_banquero <27){
               for(var RB2 =1 ; RB2 <2; RB2 ++){
                Reparticion_banquero()
               }
            
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
            
                var cartaB2 = document.getElementById('CardB2');        
                cartaB2.src = "../imagenes/vuelta_carta.jpg";
            
          console.log('Tus resultado es : '+Resultado_final_banquero)
          if(Resultado_final_banquero <27){

             if(Resultado_final_banquero <27){
               for(var RB3 =1 ; RB3 <2; RB3 ++){
                Reparticion_banquero()
               }
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
            var cartaB3 = document.getElementById('CardB3');        
            cartaB3.src = "../imagenes/vuelta_carta.jpg";
            console.log('Tus resultado es : '+Resultado_final_banquero)
           }
        } 
    }  
     
}
}   
   
  }
   if(Resultado_final >= 31 || Resultado_final_banquero >= 31 ){
    if(Resultado_final === 31){
        for(var N=0; N<3;N++){
            Reparticion_banquero()
            Usadas 
        }
var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
console.log('Tus resultado es : '+Resultado_final_banquero)
        if(Resultado_final_banquero < 31){
           if(Resultado_final_banquero <27){
            Reparticion_banquero()
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
          console.log('Tus resultado es : '+Resultado_final_banquero)
          if(Resultado_final_banquero <27){
            Reparticion_banquero()
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
          console.log('Tus resultado es : '+Resultado_final_banquero)
           }
        } 
    } 
    document.getElementById("Resul").innerHTML = Resultado_final;
    document.getElementById("Resul2").innerHTML = Resultado_final;
        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
       console.log('FELICIDADES HAZ GANADO')
       document.getElementById("ganador").innerHTML = 'FELICIDADES HAZ GANADO';
     }
     if(Resultado_final > 31){
        for(var N=0; N<3;N++){
            Reparticion_banquero()
            Usadas 
        }
var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
console.log('Tus resultado es : '+Resultado_final_banquero)
        if(Resultado_final_banquero < 31){
           if(Resultado_final_banquero <27){
            Reparticion_banquero()
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
          console.log('Tus resultado es : '+Resultado_final_banquero)
          if(Resultado_final_banquero <27){
            Reparticion_banquero()
            Usadas 
            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
          console.log('Tus resultado es : '+Resultado_final_banquero)
           }
        } 
    } 
    document.getElementById("Resul").innerHTML = Resultado_final;
    document.getElementById("Resul2").innerHTML = Resultado_final_banquero;

        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
        console.log('GANO EL BANQUERO')
        document.getElementById("ganador").innerHTML = 'GANO EL BANQUERO';
     } 
     if( Resultado_final_banquero  === 31){
        document.getElementById("Resul").innerHTML = Resultado_final;
        document.getElementById("Resul2").innerHTML = Resultado_final_banquero;

        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
        console.log('GANO EL BANQUERO')
        document.getElementById("ganador").innerHTML = 'GANO EL BANQUERO';
    }
    if( Resultado_final_banquero  > 31){
        document.getElementById("Resul").innerHTML = Resultado_final;
        document.getElementById("Resul2").innerHTML = Resultado_final_banquero;

        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
       console.log('FELICIDADES HAZ GANADO')
       document.getElementById("ganador").innerHTML = 'FELICIDADES HAZ GANADO';
    } 
   }

if(Resultado_final < 31 && Resultado_final_banquero < 31 ){
    if(Resultado_final > Resultado_final_banquero){
        document.getElementById("Resul").innerHTML = Resultado_final;
        document.getElementById("Resul2").innerHTML = Resultado_final_banquero;

        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
        console.log('FELICIDADES HAZ GANADO')
        document.getElementById("ganador").innerHTML = 'FELICIDADES HAZ GANADO';

    }
    if(Resultado_final < Resultado_final_banquero){
        document.getElementById("Resul2").innerHTML =Resultado_final_banquero;
        document.getElementById("Resul").innerHTML = Resultado_final;
        console.log('Tus resultado del Jugador: '+Resultado_final)
        console.log('Tus resultado del banquero : '+Resultado_final_banquero)
        console.log('GANO EL BANQUERO')
        document.getElementById("ganador").innerHTML = 'GANO EL BANQUERO';

    }
}
Resultado_final =0

//   var VOLVER_aJUGAR = prompt('QUIERES VOLVER A JUGAR')

// }while(VOLVER_aJUGAR ==='si')
// console.log('GRACIAS POR JUGAR')      
