  var total_final_1 = 0;
  var AS_corazon = 0
  var AS_espadas = 0
  var AS_trebol = 0
  var AS_diamantes = 0
var cont = 0
  
  

 function alerta1(){ 
    var selectvar = document.getElementById("Select_AS_corazon").value;      
    AS_corazon = parseInt(selectvar)

    
   
                 }
function alerta2(){ 
                    var selectvar = document.getElementById("Select_AS_ESPADA").value;      
                    AS_espadas = parseInt(selectvar)
                    
                   
                }
function alerta3(){ 
                                    var selectvar = document.getElementById("Select_AS_trebol").value;      
                                    AS_trebol = parseInt(selectvar)
                                    
                                   
                }
function alerta4(){ 
                   

               
                  var selectvar = document.getElementById("Select_AS_diamante").value;      
                             AS_diamantes = parseInt(selectvar)

            
                
            
               
                           

                                                 
                                                 
                }
               
var RB2 = 0
var RB3 = 0
var VB = 0
    var Resultado_final_banquero  = 0;
    var R4,R5,R6,R7 = 0;
    
    var mazo =[]
    var azar =0
    var Resultado_final = 0
    var pusadas = []
    var encontrada=false
    /////////////////////////
    var total_jugador_corazon= 0
    var total_banquero_corazon= 0
    var acomuladorC_jugador = []
    var acomuladorC_banquero = []
  
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
    var Usadas = []
    var AS_corazon_B=0
    var AS_espadas_B =0
    var AS_trebol_B =0
    var AS_diamantes_B =0

    /////////////////////
   
    ////////////////FUNCIONES////////
    /////                     CORAZONES           ESPADAS                              TREBOL                                   DIAMANTES                                    
    ////    0  1  2  3  4   5  6  7  8  9 10  11 12 13 14 15  16 17 18 19 20 21 22 23 24  25 26 27  28  29 30 31 32 33 34   35  36 37 38  39 40  41 42 43 44 45  46  47   
    mazo = [0, 2, 3, 4 , 5, 6, 7, 8, 9,10, 10,10, 0, 2, 3, 4 ,5, 6, 7, 8, 9,10, 10,10,  0, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 10 ,10, 0,  2, 3, 4 , 5, 6, 7, 8, 9, 10, 10,10 ]
    
    function reducir(a, b){return a + b}
   
   

    //////////////////////////////////
    ///////////////////////////////////////////
    function CORAZONES(){
        if (azar>=0 && azar<=11)
        {   
            if(azar===0){
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
    
               console.log("Tiene un AS DE CORAZON")
                window.addEventListener('load', function(){   document.getElementById("MYmodal").click() });  
                alerta1();
              

            
                  } 
                
                
                                  
                   
             else{
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
                    switch(azar){
                        case 1: 
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
                        case 2:
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
                        case 3:
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
                        case 4: 
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
                        case 5:
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
                        case 6:
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
                        case 7:
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
                        carta3.src = "../imagenes/corazon8.png";
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
                        case 8:
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
            if(azar===12){ 
                if(N ===0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/espadaAS.jpg";
                } 
                if(N === 1){
                    var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espadaAS.jpg";
                }
               if (N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/espadaAS.jpg";
               }
               if(R4 === 1){
                var carta4 = document.getElementById('Card4');        
            carta4.src = "../imagenes/espadaAS.jpg";
            }
            if(R5 === 1){
                var carta5 = document.getElementById('Card5');        
            carta5.src = "../imagenes/espadaAS.jpg";
            }
            if(R6 === 1){
                var carta6 = document.getElementById('Card6');        
            carta6.src = "../imagenes/espadaAS.jpg";
            }
            if(R7 === 1){
                var carta7 = document.getElementById('Card7');        
            carta7.src = "../imagenes/espadaAS.jpg";
            }
    
                
                console.log("Tiene un AS DE ESPADA")
                window.addEventListener('load', function(){   document.getElementById("modal").click();    }  );
                
                alerta2();

            } else{
        switch(azar){
    
            case 21:
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
    
            case 22:
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
    
            case 23:
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
                            
            switch(azar){
                case 13: 
              
                if(N === 0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/espada2.png";
                }
               if(N === 1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espada2.png";  
                }
               if(N === 2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/espada2.png";
                }
                if(R4 === 1){
                    var carta4= document.getElementById('Card4');        
                    carta4.src = "../imagenes/espada2.png";  
                    }
                    if(R5 === 1){
                        var carta5= document.getElementById('Card5');        
                        carta5.src = "../imagenes/espada2.png";  
                        }
                        if(R6 === 1){
                            var carta6= document.getElementById('Card6');        
                            carta6.src = "../imagenes/espada2.png";  
                            }
                        if(R7 === 1){
                            var carta7= document.getElementById('Card7');        
                            carta7.src = "../imagenes/espada2.png";  
                            }
                console.log(mazo[azar] + " DE espada")
                break
                case 14:
                if(N === 0){
                    var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/espada3.png";
                }
                if(N ===1){
                    var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espada3.png";
                }
                
                if(N ===2){
                    var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/espada3.png";
                }
                if(R4 ===1){
                    var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/espada3.png";
                }
                if(R5 ===1){
                    var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/espada3.png";
                }
                if(R6 ===1){
                    var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/espada3.png";
                }
                if(R7 ===1){
                    var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/espadas3.png";
                }
    
                console.log(mazo[azar] + " DE espada")
                break
                case 15:
                if(N ===0){
                    var carta1 = document.getElementById('Card');        
                carta1.src = "../imagenes/espada4.jpg";
                }
                if(N ===1){
                    var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espada4.jpg";
                }
                if(N ===2){
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
                case 16: 
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
                case 17:
                if(N ===0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/espada6.png";
                }
               if(N ===1){
                var carta2 = document.getElementById('Card2');        
                carta2.src = "../imagenes/espada6.png";
               }
               if(N ===2){
                var carta3 = document.getElementById('Card3');        
                carta3.src = "../imagenes/espada6.png";
               }
               if(R4 ===1){
                var carta4 = document.getElementById('Card4');        
                carta4.src = "../imagenes/espada6.png";
               }
               if(R5 ===1){
                var carta5 = document.getElementById('Card5');        
                carta5.src = "../imagenes/espada6.png";
               }
               if(R6 ===1){
                var carta6 = document.getElementById('Card6');        
                carta6.src = "../imagenes/espada6.png";
               }
               if(R7 ===1){
                var carta7 = document.getElementById('Card7');        
                carta7.src = "../imagenes/espada6.png";
               }
    
                console.log(mazo[azar] + " DE espada")
                break
                case 18:
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
                case 19:
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
                case 20:
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
            if(azar===24){ 
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
               window.addEventListener('load', function(){   document.getElementById("modaltrebol").click();    }  );
                
                alerta3();

            } else{
        switch(azar){
    
            case 33:
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
    
            case 34:
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
    
            case 35:
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
                    switch(azar){
                        case 25: 
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
                        case 26:
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
                        case 27:
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
                        case 28: 
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
                        case 29:
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
                        case 30:
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
                        case 31:
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
                        case 32:
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
            if(azar===36){
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
               window.addEventListener('load', function(){   document.getElementById("MODALDIAMANTE").click();  
                 

                 }  );
                
                alerta4();
           }else{
        switch(azar){
    
            case 45:
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
    
            case 46:
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
    
            case 47:
            
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
            
            switch(azar){
                case 37: 
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
                case 38:
                if(N === 0){
                    var carta1 = document.getElementById('Card');        
                    carta1.src = "../imagenes/diamante3.jpg";
                }
              
                if(N === 1){
                    var carta2 = document.getElementById('Card2');        
                    carta2.src = "../imagenes/diamante3.jpg"; 
                }
                
                if(N === 2){
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
                case 39:
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
                case 40: 
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
                case 41:
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
                case 42:
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
                    var carta4 = document.getElementById('Card4');        
                    carta4.src = "../imagenes/diamante7.jpg";
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
                case 43:
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
                case 44:
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
    
         
    }}

 


    ///////////////////////////
    function CORAZONES_BANQUERO(){
        if (azar>=0 && azar<=11)
        {   
            if(azar===0){
              
                console.log("Tiene un AS DE CORAZON")
                         
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazonAS.jpg" >';
                                     
                          
                        }
                        if(VB === 1){
                                     
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazonAS.jpg" >';
                          
                        }
                        if(VB === 2){
                            
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazonAS.jpg" >';
                        }
                        if(RB2 === 1){
                         
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazonAS.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazonAS.jpg" >';  
                        } 
                        AS_corazon_B = 11
            } else{
                switch(azar){        
                    case 9:
                    console.log("J DE CORAZON"); 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazonJ.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazonJ.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazonJ.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazonJ.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazonJ.jpg" >';  
                        }                                    
                    break;         
                    case 10:
                    console.log("Q DE CORAZON");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazonQ.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazonQ.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazonQ.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazonQ.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazonQ.jpg" >';  
                    }
                    break;
                    case 11:
                    console.log("K DE CORAZON");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazonK.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazonK.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazonK.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazonK.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazonK.jpg" >';  
                    }
                    break;        
                    default: 
                    switch(azar){
                        case 1: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon2.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon2.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon2.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon2.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon2.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 2:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon3.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon3.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon3.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon3.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon3.png" >';  
                        }
                        
                    
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 3:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon4.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon4.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon4.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon4.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon4.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 4: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon5.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon5.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon5.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon5.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon5.jpg" >';  
                        }
    
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 5:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon6.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon6.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon6.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon6.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon6.png" >';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 6:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon7.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon7.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon7.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon7.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon7.png" >';  
                        }
                            
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 7:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon8.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon8.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon8.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon8.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon8.png" >';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                        case 8:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/corazon9.jpg">';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/corazon9.jpg">';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/corazon9.jpg">';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/corazon9.jpg">';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/corazon9.jpg">';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                    }
                    break;                      
                           
                }                 
           }
           acomuladorC_banquero.push(mazo[azar])                                                               
           if(AS_corazon_B>0){
               var valores= acomuladorC_banquero.reduce(reducir);; 
                 total_banquero_corazon= valores + AS_corazon_B
                
           }
           else{
                total_banquero_corazon= acomuladorC_banquero.reduce(reducir);;
    
           }
        }             
    
       
    
    }
    
    function ESPADAS_BANQUERO(){
        if(azar>=12 && azar<=23) {
            if(azar===12){
              
                console.log("Tiene un AS DE espada")
                         
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espadaAS.jpg" >';
                                     
                          
                        }
                        if(VB === 1){
                                     
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espadaAS.jpg" >';
                          
                        }
                        if(VB === 2){
                            
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espadaAS.jpg" >';
                        }
                        if(RB2 === 1){
                         
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espadaAS.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espadaAS.jpg" >';  
                        } 
                        AS_espadas_B = 11
            } else{
                switch(azar){        
                    case 21:
                    console.log("J DE espada"); 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espadaJ.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espadaJ.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espadaJ.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espadaJ.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espadaJ.jpg" >';  
                        }                                    
                    break;         
                    case 22:
                    console.log("Q DE espada");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/espadaQ.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/espadaQ.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/espadaQ.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/espadaQ.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/espadaQ.jpg" >';  
                    }
                    break;
                    case 23:
                    console.log("K DE espada");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/espadaK.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/espadaK.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/espadaK.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/espadaK.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/espadaK.jpg" >';  
                    }
                    break;        
                    default: 
                    switch(azar){
                        case 13: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada2.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada2.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada2.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada2.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada2.png" >';  
                        }
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 14:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada3.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada3.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada3.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada3.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada3.png" >';  
                        }
                        
                    
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 15:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada4.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada4.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada4.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada4.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada4.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 16: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada5.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada5.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada5.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada5.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada5.jpg" >';  
                        }
    
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 17:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada6.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada6.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada6.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada6.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada6.png" >';  
                        }
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 18:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada7.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada7.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada7.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada7.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada7.jpg" >';  
                        }
                            
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 19:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada8.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada8.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada8.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada8.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada8.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE espada")
                        break
                        case 20:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/espada9.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/espada9.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/espada9.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/espada9.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/espada9.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE CORAZON")
                        break
                    }
                    break;                      
                           
                }                 
           }
    acomuladorE_banquero.push(mazo[azar])                                                               
           if(AS_espadas_B>0){
                var valores= acomuladorE_banquero.reduce(reducir);; 
                 total_banquero_espadas= valores + AS_espadas_B
           }
           else{
                total_banquero_espadas= acomuladorE_banquero.reduce(reducir);;
           }
    }
    }
    function TREBOL_BANQUERO (){
        if(azar>=24 && azar<=35) {
            if(azar===24){
              
                console.log("Tiene un AS DE trebol")
                         
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebolAS.PNG" >';
                                     
                          
                        }
                        if(VB === 1){
                                     
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebolAS.PNG" >';
                          
                        }
                        if(VB === 2){
                            
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebolAS.PNG" >';
                        }
                        if(RB2 === 1){
                         
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebolAS.PNG" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebolAS.PNG" >';  
                        } 
                        AS_trebol_B = 11
            } else{
                switch(azar){        
                    case 33:
                    console.log("J DE trebol"); 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebolJ.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebolJ.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebolJ.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebolJ.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebolJ.jpg" >';  
                        }                                    
                    break;         
                    case 34:
                    console.log("Q DE trebol");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebolQ.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebolQ.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebolQ.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebolQ.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebolQ.jpg" >';  
                    }
                    break;
                    case 35:
                    console.log("K DE trebol");
                    if(VB === 0){
                        Console.log(HEY)
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebolK.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebolK.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebolK.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebolK.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebolK.jpg" >';  
                    }
                    break;        
                    default: 
                    switch(azar){
                        case 25: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol2.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol2.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol2.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol2.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol2.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 26:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol3.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol3.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol3.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol3.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol3.jpg" >';  
                        }
                        
                    
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 27:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol4.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol4.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol4.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol4.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol4.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 28: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol5.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol5.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol5.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol5.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol5.jpg" >';  
                        }
    
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 29:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol6.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol6.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol6.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol6.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol6.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 30:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol7.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol7.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol7.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol7.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol7.jpg" >';  
                        }
                            
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 31:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol8.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol8.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol8.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol8.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol8.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE trebol")
                        break
                        case 32:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/trebol9.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/trebol9.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/trebol9.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/trebol9.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/trebol9.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE trebol")
                        break
                    }
                    break;                      
                           
                }                 
           }
        acomuladorT_banquero.push(mazo[azar])                                                               
        if(AS_trebol_B>0){
            var valores= acomuladorT_banquero.reduce(reducir);; 
              total_banquero_trebol= valores + AS_trebol_B
        }
        else{
         total_banquero_trebol= acomuladorT_banquero.reduce(reducir);;
        }
    }
    
    }
    function DIAMANTES_BANQUERO (){
        if(azar>=36 && azar<=47) {
            if(azar===36){
              
                console.log("Tiene un AS DE diamante")
                         
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamanteAS.jpg" >';
                                     
                          
                        }
                        if(VB === 1){
                                     
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamanteAS.jpg" >';
                          
                        }
                        if(VB === 2){
                            
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamanteAS.jpg" >';
                        }
                        if(RB2 === 1){
                         
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamanteAS.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamanteAS.jpg" >';  
                        } 
                        AS_diamantes_B = 11
            } else{
                switch(azar){        
                    case 45:
                    console.log("J DE diamante"); 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamanteJ.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamanteJ.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamanteJ.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamanteJ.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamanteJ.jpg" >';  
                        }                                    
                    break;         
                    case 46:
                    console.log("Q DE diamante");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamanteQ.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamanteQ.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamanteQ.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamanteQ.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamanteQ.jpg" >';  
                    }
                    break;
                    case 47:
                    console.log("K DE diamante");
                    if(VB === 0){
                        document.getElementById("event1").innerHTML = '<!--  ';
                        document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamanteK.jpg" >';
                    }
                    if(VB === 1){      
                        document.getElementById("event3").innerHTML = '<!--  ';
                        document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamanteK.jpg" >';
                    }
                    if(VB === 2){
                        document.getElementById("event5").innerHTML = '<!--  ';
                        document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamanteK.jpg" >';
                    }
                    if(RB2 === 1){
                        document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamanteK.jpg" >';  
                    }
                    if(RB3 === 1){
                        document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamanteK.jpg" >';  
                    }
                    break;        
                    default: 
                    switch(azar){
                        case 37: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante2.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante2.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante2.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante2.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante2.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 38:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante3.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante3.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante3.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante3.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante3.jpg" >';  
                        }
                        
                    
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 39:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante4.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante4.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante4.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante4.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante4.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 40: 
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante5.png" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante5.png" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante5.png" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante5.png" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante5.png" >';  
                        }
    
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 41:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante6.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante6.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante6.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante6.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante6.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 42:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante7.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante7.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante7.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante7.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante7.jpg" >';  
                        }
                            
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 43:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante8.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante8.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante8.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante8.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante8.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE diamante")
                        break
                        case 44:
                        if(VB === 0){
                            document.getElementById("event1").innerHTML = '<!--  ';
                            document.getElementById("event2").innerHTML = '<img  src="../imagenes/diamante9.jpg" >';
                        }
                        if(VB === 1){      
                            document.getElementById("event3").innerHTML = '<!--  ';
                            document.getElementById("event4").innerHTML = '<img  src="../imagenes/diamante9.jpg" >';
                        }
                        if(VB === 2){
                            document.getElementById("event5").innerHTML = '<!--  ';
                            document.getElementById("event6").innerHTML = '<img  src="../imagenes/diamante9.jpg" >';
                        }
                        if(RB2 === 1){
                            document.getElementById("event7").innerHTML = '<img  src="../imagenes/diamante9.jpg" >';  
                        }
                        if(RB3 === 1){
                            document.getElementById("event8").innerHTML = '<img  src="../imagenes/diamante9.jpg" >';  
                        }
                        console.log(mazo[azar] + " DE diamante")
                        break
                    }
                    break;                      
                           
                }                 
           }
    acomuladorD_banquero.push(mazo[azar])                                                               
    if(AS_diamantes_B>0){
        var valores= acomuladorD_banquero.reduce(reducir);; 
         total_banquero_diamantes= valores + AS_diamantes_B
    }
    else{
         total_banquero_diamantes= acomuladorD_banquero.reduce(reducir);;
    }
    
    }
    }
    // 
    
   
    ////////////////////////////////
    function CARTAS_AZAR(){
        do {
            encontrada=false
         azar=Math.floor(Math.random() * 47 )
    
         if(Usadas.includes(azar)) 
         {
             encontrada=true  
                      
         } 
         
       
        }while(encontrada === true)
    }
    function CARTAS_AZAR2(){
        do {
            encontrada=false
         azar=Math.floor(Math.random() * 47 )
    
         if(Usadas.includes(azar)||azar === 0 ||azar === 12||azar === 24||azar === 36) 
         {
             encontrada=true  
                      
         } 
         
       
        }while(encontrada ===true)
    }
    function Reparticion(){
        
        CARTAS_AZAR();

        Usadas.push(azar) 
        CORAZONES();
        ESPADAS();
        TREBOL();
        DIAMANTES();
       
    }
    function ReparticionR(){
        
        CARTAS_AZAR2();

        Usadas.push(azar) 
        CORAZONES();
        ESPADAS();
        TREBOL();
        DIAMANTES();
       
    }
    /////////
    function Reparticion_banquero(){
        CARTAS_AZAR();
        Usadas.push(azar) 
        CORAZONES_BANQUERO()
        ESPADAS_BANQUERO()
        TREBOL_BANQUERO ()
        DIAMANTES_BANQUERO ()
    }
//
 console.log('adentro'+AS_diamantes)
               

                    

                      
               
var  aco = 0
 //var acomulador = 0
    ///////////////////////
     for(var N=0; N<3;N++){
        Reparticion()
    }

    var contador = 0
    var  acomulador = 0
    var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
    var total_final_1 = Resultado_final;
    
     console.log(total_final_1)  
        // pedir cartas
        if(total_final_1 < 31){
            
            function getcarta(){

        if( acomulador < 31){

            if (contador ===0) {
                    R4 = 1;
                    ReparticionR()        
                  
                    console.log(':'+AS_corazon+':'+AS_espadas+':'+AS_trebol+':'+AS_diamantes)
                    var total = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
                    var Resultado_final=total+AS_corazon+AS_espadas+AS_trebol+AS_diamantes
                    console.log('Tus resultado es : '+Resultado_final)
                    var aco =+ Resultado_final;
                    
                 if ( aco ===31 ) {
                    for( VB=0; VB<3;VB++){
                        Reparticion_banquero()}
                        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                        console.log('Tus resultado es : '+Resultado_final_banquero)
                        if(Resultado_final_banquero < 31){
                             if(Resultado_final_banquero <27){
                                RB2 =1
                                    Reparticion_banquero()
                                    var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                       
                                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                        RB2 = 0
                                    if(Resultado_final_banquero <27){
                                        RB3 =1
                                        Reparticion_banquero()
                                          var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                          
                                          console.log('Tus resultado es : '+Resultado_final_banquero) 
                                          RB3 =0
                                        }
                             }  
                        }
         
        console.log(Resultado_final_banquero)
        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
        window.addEventListener('click', function(){   
        document.getElementById("Name").innerHTML = '!! GANASTE !!';
      document.getElementById("Nam").innerHTML = Resultado_final;
        document.getElementById("modal_Carta").click();} );

             console.log('ganaste');
         }
         
                 if(aco >31){
                     for( VB=0; VB<3;VB++){
                        Reparticion_banquero()}
                        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                if(Resultado_final_banquero < 31){
                                    if(Resultado_final_banquero <27){
                                        RB2 =1
                                            Reparticion_banquero()
                                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                               
                                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                                RB2 = 0
                                            if(Resultado_final_banquero <27){
                                                RB3 =1
                                                Reparticion_banquero()
                                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                                  
                                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                                  RB3 =0
                                                }
                                     }    
     
}
         if(Resultado_final_banquero<=31){
            document.getElementById("pause").innerHTML = '<!--  ';
            document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';

            console.log(Resultado_final_banquero)
         document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                 window.addEventListener('click', function(){   
         document.getElementById("Name").innerHTML = 'Gano el banquero';
         document.getElementById("Nam").innerHTML = aco;
        document.getElementById("modal_Carta").click();} );
             console.log('perdiste')
         }

             if(Resultado_final_banquero >31 ){
                document.getElementById("pause").innerHTML = '<!--  ';
                document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
                document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                window.addEventListener('click', function(){  
                document.getElementById("Name").innerHTML = 'PERDISTE';
                document.getElementById("Nam").innerHTML =aco;
                document.getElementById("modal_Carta").click();} );
                console.log('perdiste')
            }
        }
       
         R4 = 0;
        }
     
  
        if (contador ===1) {
             
    R5 = 1;
    ReparticionR()        

    var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes+AS_corazon+AS_espadas+AS_trebol+AS_diamantes
    console.log('Tus resultado es : '+Resultado_final)
            var aco =+ Resultado_final;
            console.log(aco)
 if ( aco ===31 ) {
    for( VB=0; VB<3;VB++){
        Reparticion_banquero()}
        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

        console.log('Tus resultado es : '+Resultado_final_banquero)
        if(Resultado_final_banquero < 31){
            if(Resultado_final_banquero <27){
                RB2 =1
                    Reparticion_banquero()
                    var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                       
                        console.log('Tus resultado es : '+Resultado_final_banquero)
                        RB2 = 0
                    if(Resultado_final_banquero <27){
                        RB3 =1
                        Reparticion_banquero()
                          var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                          
                          console.log('Tus resultado es : '+Resultado_final_banquero) 
                          RB3 =0
                        }
             }  
        }

console.log(Resultado_final_banquero)
document.getElementById("pause").innerHTML = '<!--  ';
document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
document.getElementById("RESUL").innerHTML = Resultado_final_banquero
window.addEventListener('click', function(){   
document.getElementById("Name").innerHTML = '!! GANASTE !!';
document.getElementById("Nam").innerHTML = aco
document.getElementById("modal_Carta").click();} );

console.log('ganaste');
}

 if(aco >31){
     for( VB=0; VB<3;VB++){
        Reparticion_banquero()}
        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

        console.log('Tus resultado es : '+Resultado_final_banquero)
                if(Resultado_final_banquero < 31){
                    if(Resultado_final_banquero <27){
                        RB2 =1
                            Reparticion_banquero()
                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                               
                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                RB2 = 0
                            if(Resultado_final_banquero <27){
                                RB3 =1
                                Reparticion_banquero()
                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                  
                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                  RB3 =0
                                }
                     }  

}

if(Resultado_final_banquero<=31){
    document.getElementById("pause").innerHTML = '<!--  ';
    document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
    console.log(Resultado_final_banquero)
 document.getElementById("RESUL").innerHTML = Resultado_final_banquero
         window.addEventListener('click', function(){   
 document.getElementById("Name").innerHTML = 'Gano el banquero';
 document.getElementById("Nam").innerHTML = acomulador;
document.getElementById("modal_Carta").click();} );
     console.log('perdiste')
 }

     if(Resultado_final_banquero >31 ){
        document.getElementById("pause").innerHTML = '<!--  ';
        document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
        window.addEventListener('click', function(){  
        document.getElementById("Name").innerHTML = 'PERDISTE';
        document.getElementById("Nam").innerHTML =acomulador;
        document.getElementById("modal_Carta").click();} );
        console.log('perdiste')
    }
}

R5 = 0;
        }
        if (contador ===2) {
            R6 = 1;
            ReparticionR()        
            var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
            console.log('Tus resultado es : '+Resultado_final)
            var aco =+ Resultado_final;
            console.log(aco)
         if ( aco ===31 ) {
            for( VB=0; VB<3;VB++){
                Reparticion_banquero()}
                var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                console.log('Tus resultado es : '+Resultado_final_banquero)
                if(Resultado_final_banquero < 31){
                    if(Resultado_final_banquero <27){
                        RB2 =1
                            Reparticion_banquero()
                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                               
                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                RB2 = 0
                            if(Resultado_final_banquero <27){
                                RB3 =1
                                Reparticion_banquero()
                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                  
                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                  RB3 =0
                                }
                     }    
                }
                document.getElementById("pause").innerHTML = '<!--  ';
                document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';

console.log(Resultado_final_banquero)
document.getElementById("RESUL").innerHTML = Resultado_final_banquero
window.addEventListener('click', function(){   
document.getElementById("Name").innerHTML = '!! GANASTE !!';
document.getElementById("Nam").innerHTML = Resultado_final;
document.getElementById("modal_Carta").click();} );

     console.log('ganaste');
 }
 
         if(aco >31){
             for( VB=0; VB<3;VB++){
                Reparticion_banquero()}
                var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                console.log('Tus resultado es : '+Resultado_final_banquero)
                        if(Resultado_final_banquero < 31){
                            if(Resultado_final_banquero <27){
                                RB2 =1
                                    Reparticion_banquero()
                                    var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                       
                                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                        RB2 = 0
                                    if(Resultado_final_banquero <27){
                                        RB3 =1
                                        Reparticion_banquero()
                                          var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                          
                                          console.log('Tus resultado es : '+Resultado_final_banquero) 
                                          RB3 =0
                                        }
                             }  

}
 if(Resultado_final_banquero<=31){
    document.getElementById("pause").innerHTML = '<!--  ';
    document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
    console.log(Resultado_final_banquero)
 document.getElementById("RESUL").innerHTML = Resultado_final_banquero
         window.addEventListener('click', function(){   
 document.getElementById("Name").innerHTML = 'Gano el banquero';
 document.getElementById("Nam").innerHTML = aco;
document.getElementById("modal_Carta").click();} );
     console.log('perdiste')
 }

     if(Resultado_final_banquero >31 ){
        document.getElementById("pause").innerHTML = '<!--  ';
        document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
        window.addEventListener('click', function(){  
        document.getElementById("Name").innerHTML = 'PERDISTE';
        document.getElementById("Nam").innerHTML =aco;
        document.getElementById("modal_Carta").click();} );
        console.log('perdiste')
    }
}

 R6 = 0;
}      
        if (contador ===3) {
            console.log('entro')
        
            R7 = 1;
        
            ReparticionR()        
        
            var Resultado_final = total_jugador_corazon+total_jugador_espadas+total_jugador_trebol+total_jugador_diamantes
            console.log('Tus resultado es : '+Resultado_final)
            var aco =+ Resultado_final;
            console.log(aco)
         if ( aco ===31 ) {
            for( VB=0; VB<3;VB++){
                Reparticion_banquero()}
                var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
        
                console.log('Tus resultado es : '+Resultado_final_banquero)
                if(Resultado_final_banquero < 31){
                    if(Resultado_final_banquero <27){
                        RB2 =1
                            Reparticion_banquero()
                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                               
                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                RB2 = 0
                            if(Resultado_final_banquero <27){
                                RB3 =1
                                Reparticion_banquero()
                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                  
                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                  RB3 =0
                                }
                     }  
                }
                document.getElementById("pause").innerHTML = '<!--  ';
                document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
        console.log(Resultado_final_banquero)
        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
        window.addEventListener('click', function(){   
        document.getElementById("Name").innerHTML = '!! GANASTE !!';
     document.getElementById("Nam").innerHTML = aco
        document.getElementById("modal_Carta").click();} );
        
        console.log('ganaste');
        }
        
         if(aco >31){
             for( VB=0; VB<3;VB++){
                Reparticion_banquero()}
                var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
        
                console.log('Tus resultado es : '+Resultado_final_banquero)
                        if(Resultado_final_banquero < 31){
                            if(Resultado_final_banquero <27){
                                RB2 =1
                                    Reparticion_banquero()
                                    var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                       
                                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                        RB2 = 0
                                    if(Resultado_final_banquero <27){
                                        RB3 =1
                                        Reparticion_banquero()
                                          var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                          
                                          console.log('Tus resultado es : '+Resultado_final_banquero) 
                                          RB3 =0
                                        }
                             }  
        
        }
        
        if(Resultado_final_banquero<=31){
            document.getElementById("pause").innerHTML = '<!--  ';
            document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
            console.log(Resultado_final_banquero)
         document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                 window.addEventListener('click', function(){   
         document.getElementById("Name").innerHTML = 'Gano el banquero';
         document.getElementById("Nam").innerHTML = acomulador;
        document.getElementById("modal_Carta").click();} );
             console.log('perdiste')
         }

             if(Resultado_final_banquero >31 ){
                document.getElementById("pause").innerHTML = '<!--  ';
                document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';

                document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                window.addEventListener('click', function(){  
                document.getElementById("Name").innerHTML = 'PERDISTE';
                document.getElementById("Nam").innerHTML =acomulador;
                document.getElementById("modal_Carta").click();} );
                console.log('perdiste')
            }
        }
        
        R7 = 0;
                }

acomulador = acomulador +Resultado_final
acomulador = aco;
console.log(acomulador)
    contador ++

}

        



    
         }}

console.log('VALOR DEL ACOMULADOR: '+acomulador)
         if (  total_final_1===31 ) {
                for( VB=0; VB<3;VB++){
                        Reparticion_banquero()}
                        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                if(Resultado_final_banquero < 31){
                                    if(Resultado_final_banquero <27){
                                        RB2 =1
                                            Reparticion_banquero()
                                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                               
                                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                                RB2 = 0
                                            if(Resultado_final_banquero <27){
                                                RB3 =1
                                                Reparticion_banquero()
                                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                                  
                                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                                  RB3 =0
                                                }
                                     }  
     
        }
        document.getElementById("pause").innerHTML = '<!--  ';
        document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
              window.addEventListener('click', function(){    
          document.getElementById("Name").innerHTML = '!! GANASTE !!';
          document.getElementById("Nam").innerHTML = acomulador+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;
         document.getElementById("modal_Carta").click();} );
            }

         if(total_final_1 >31){
             for( VB=0; VB<3;VB++){
                        Reparticion_banquero()}
                        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes

                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                if(Resultado_final_banquero < 31){
                                    if(Resultado_final_banquero <27){
                                        RB2 =1
                                            Reparticion_banquero()
                                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                               
                                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                                RB2 = 0
                                            if(Resultado_final_banquero <27){
                                                RB3 =1
                                                Reparticion_banquero()
                                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                                  
                                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                                  RB3 =0
                                                }
                                     }  
     
        }
        document.getElementById("pause").innerHTML = '<!--  ';
        document.getElementById("term").innerHTML = '<embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';

console.log(Resultado_final_banquero)
         document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                 window.addEventListener('click', function(){  
         document.getElementById("Name").innerHTML = 'Gano el banquero';
          document.getElementById("Nam").innerHTML = acomulador+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;
        document.getElementById("modal_Carta").click();} );
             console.log('perdiste')
            }



function QUEDARSE(){
   
document.getElementById('pause').innerHTML=' <!--';
document.getElementById('term').innerHTML=' <embed src="../audios/terminar.mp3" autostart="false" loop="true" volume="80" width="0" height="0">';
                  for( VB=0; VB<3;VB++){
                        Reparticion_banquero()}
                        var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                        console.log('Tus resultado es : '+Resultado_final_banquero)
                                if(Resultado_final_banquero < 31){
                                    if(Resultado_final_banquero <27){
                                        RB2 =1
                                            Reparticion_banquero()
                                            var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                                console.log('Tus resultado es : '+Resultado_final_banquero)
                                                RB2 = 0
                                            if(Resultado_final_banquero <27){
                                                RB3 =1
                                                Reparticion_banquero()
                                                  var Resultado_final_banquero = total_banquero_corazon+total_banquero_espadas+total_banquero_trebol+total_banquero_diamantes
                                                  
                                                  console.log('Tus resultado es : '+Resultado_final_banquero) 
                                                  RB3 =0
                                                }
                                     }  
     
        }

    if(acomulador===0)
    {
        console.log("Acumuladoor igual a 0");

        if( total_final_1 <Resultado_final_banquero){
           
                    if(total_final_1 <= 31 && Resultado_final_banquero > 31){
                    
                            console.log( total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes)
                            document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                    window.addEventListener('click', function(){   
                            document.getElementById("Name").innerHTML = '!! GANASTE !!';
                            document.getElementById("Nam").innerHTML =  total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;
                        document.getElementById("modal_Carta").click();} );
                                console.log('se paso banquero')
                        }


                        if( total_final_1<31 && Resultado_final_banquero <=31){
                            console.log( total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes)
                            document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                    window.addEventListener('click', function(){   
                            document.getElementById("Name").innerHTML = 'Gano el banquero';
                            document.getElementById("Nam").innerHTML =  total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;
                        document.getElementById("modal_Carta").click();} );
                                console.log('Gano el banquero')
                        }
                    
                   
                }
                else{

                        if(Resultado_final_banquero<=31 && Resultado_final_banquero>total_final_1 ){
                            window.addEventListener('click', function(){  
                                document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                            document.getElementById("Name").innerHTML = 'Gano el banquero';              
                            document.getElementById("Nam").innerHTML = total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;  
                            document.getElementById("modal_Carta").click();} );
                            console.log('perdiste')
                        }
                            
                            
                            if(total_final_1>31 && Resultado_final_banquero<=31 ){
                                window.addEventListener('click', function(){  
                                    document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                document.getElementById("Name").innerHTML = 'PERDISTE';              
                                document.getElementById("Nam").innerHTML = total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;  
                                document.getElementById("modal_Carta").click();} );
                                console.log('perdiste')
                            }

                            if(total_final_1<31 && Resultado_final_banquero<31 ){
                                window.addEventListener('click', function(){  
                                    document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                document.getElementById("Name").innerHTML = 'GANASTE';              
                                document.getElementById("Nam").innerHTML = total_final_1+AS_corazon+AS_espadas+AS_trebol+AS_diamantes;  
                                document.getElementById("modal_Carta").click();} );
                                console.log('perdiste')
                            }


                       
                     }
    }
       

        
                if(acomulador>0)
                {
                    

                            if( acomulador >Resultado_final_banquero  )
                            {
                                //si banquero es mayor q jugador y menor o igual a 31
                                    if(Resultado_final_banquero<=31 && Resultado_final_banquero> acomulador){
                                    window.addEventListener('click', function(){  
                                        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                    document.getElementById("Name").innerHTML = 'Gano el banquero';              
                                    document.getElementById("Nam").innerHTML = acomulador;  
                                    document.getElementById("modal_Carta").click();} );
                                    console.log('perdiste')
                                }
                                    
                                    //si se pasa jugador y banquero <31
                                    if((Resultado_final_banquero<=31 &&  acomulador >31 )  || (Resultado_final_banquero===31  ) ) {
                                        window.addEventListener('click', function(){  
                                        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                        document.getElementById("Name").innerHTML = 'Gano el banquero';              
                                        document.getElementById("Nam").innerHTML = acomulador;  
                                        document.getElementById("modal_Carta").click();} );
                                        console.log('Gano el banquero')
                                    }
                            } else
                                    {
                                        //si se pasa banquero
                                        if(acomulador<=31 && Resultado_final_banquero>31){
                                

                                            console.log(Resultado_final_banquero)
                                        document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                                window.addEventListener('click', function(){   
                                        document.getElementById("Name").innerHTML = '!! GANASTE !!';
                                        document.getElementById("Nam").innerHTML =  acomulador;
                                        document.getElementById("modal_Carta").click();} );
                                            console.log('ganaste')
                                        }
                                
                                            if( acomulador< Resultado_final_banquero && Resultado_final_banquero<=31 ){
                                            
                            
                                                document.getElementById("RESUL").innerHTML = Resultado_final_banquero
                                                window.addEventListener('click', function(){  
                                                document.getElementById("Name").innerHTML = 'Gano el banquero';
                                                document.getElementById("Nam").innerHTML = acomulador;
                                                document.getElementById("modal_Carta").click();} );
                                                console.log('perdiste')
                                            }
                                        
                                    } 
                    
                    
                    }

       
       


}



    

















       