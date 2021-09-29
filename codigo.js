var ganhou=0;
var empate=0;
var jogador="X";
var matriz=[[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function verifica(){ //Verifica se alguem venceu, atraves da matriz
	//Horizontais
	if(matriz[0][0]!=0 && matriz[0][0]==matriz[0][1] && matriz[0][1]==matriz[0][2]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
	if(matriz[1][0]!=0 && matriz[1][0]==matriz[1][1] && matriz[1][1]==matriz[1][2]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
	if(matriz[2][0]!=0 && matriz[2][0]==matriz[2][1] && matriz[2][1]==matriz[2][2]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}

	//Verticais
	if(matriz[0][0]!=0 && matriz[0][0]==matriz[1][0] && matriz[1][0]==matriz[2][0]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
	if(matriz[0][1]!=0 && matriz[0][1]==matriz[1][1] && matriz[1][1]==matriz[2][1]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
	if(matriz[0][2]!=0 && matriz[0][2]==matriz[1][2] && matriz[1][2]==matriz[2][2]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}

	//Diagonais
	if(matriz[0][0]!=0 && matriz[0][0]==matriz[1][1] && matriz[1][1]==matriz[2][2]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
	if(matriz[0][2]!=0 && matriz[0][2]==matriz[1][1] && matriz[1][1]==matriz[2][0]){
	    ganhou=1;
	    document.getElementById("texto").innerHTML="O Jogador "+jogador+" venceu!";
	}
}

function mudar_vez(letra){
	if(ganhou==0){
	//Verifica se nao houve empate (nenhum botao vazio)
	var vazios=0;
	    for(l=1;l<=3;l++){
	        for(c=1;c<=3;c++){
		    if(document.getElementById(l+"x"+c).value=="_"){
		    vazios++;
		    break;
	 	    }			
	        }
	    }
	    if(vazios==0){empate=1;document.getElementById("texto").innerHTML="Empate!";}

	    if(empate==0){
	        if(letra=="X"){jogador="O";document.getElementById("texto").innerHTML="Jogador O, é a sua vez!";}
	        else{jogador="X";document.getElementById("texto").innerHTML="Jogador X, é a sua vez!";}
	    }
	}
}
	
function apertou(id){
//Verifica se ninguem ganhou e se a area esta vazia
	if(ganhou==0 && empate==0 && document.getElementById(id).value=="_"){
	    if(jogador=="X"){ //Verifica de quem é a vez
		document.getElementById(id).value=jogador;
		matriz[id[0]-1][id[2]-1]=1;//preenche a matriz
		verifica();
		mudar_vez(jogador);
	    }
	    else{
		document.getElementById(id).value=jogador;
		matriz[id[0]-1][id[2]-1]=2;//preenche a matriz
		verifica();
		mudar_vez(jogador);
	    }
	}
}

function zerar(){
	ganhou=0;
	empate=0;
	jogador="X";
	matriz=[[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	document.getElementById("texto").innerHTML="Jogador X, é a sua vez!";
	for(l=1;l<=3;l++){
	    for(c=1;c<=3;c++){
		document.getElementById(l+"x"+c).value="_";	
	    }
	}
}