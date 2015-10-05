var billCheep;
        var billbob;
        var billGoomba;
        var total;
        
        // Bob-omb
        document.getElementById('billbob').addEventListener('click',function() {
   
    var coinsBob = document.getElementById('coinsbob').value;
    var caughtBob = document.getElementById('caughtbob').value;
                                                
 billbob = parseInt(coinsBob) * parseInt(caughtBob);

    document.getElementById('totalbob').innerHTML = billbob;
                                                
    }
    );  
// Cheep-Cheep
document.getElementById('billcheep').addEventListener('click',function() {
   
    var coinCheep = document.getElementById('coincheep').value;
    var caughtCheep = document.getElementById('caughtcheep').value;
                                                
 billCheep = parseInt(coinCheep) * parseInt(caughtCheep);

    document.getElementById('totalcheep').innerHTML = billCheep;
                                                
    }
    );    
    
        //Goomba
    document.getElementById('billgoomba').addEventListener('click',function() {
   
    var coinGoomba = document.getElementById('coingoomba').value;
    var caughtGoomba = document.getElementById('caughtgoomba').value;
                                                
 billGoomba = parseInt(coinGoomba) * parseInt(caughtGoomba);

    document.getElementById('totalgoomba').innerHTML = billGoomba;
                                                
    }
    );  

        //Total
document.getElementById('total').addEventListener('click', function(){

    
    
    
    total = parseInt(billbob) + parseInt(billCheep) + parseInt(billGoomba) ;
    
document.getElementById('totalbill').innerHTML = total;
                        });
