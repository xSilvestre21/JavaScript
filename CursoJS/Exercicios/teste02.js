
function players(jogador){
    if(jogador == 3){
       return 'Balde';
    }
    if(jogador == 7){
       return 'Ferran';
    }
    if(jogador == 17){
       return 'De Bruyne';
    }
    if(jogador == 10){
       return 'Aspas';
    }
    if(jogador == 21){
       return 'De Jong';
    }
    if(jogador == 6){
       return 'Gavi';
    }
    if(jogador == 5){
       return 'Rodri';
    }
}

console.log(players(7));


function escolhePlayer (num) {
   switch(num) {
      case 0:
         console.log('Ninguem');
      case 1:
         console.log('Ter Stegen');

   }
}

escolhePlayer(1)