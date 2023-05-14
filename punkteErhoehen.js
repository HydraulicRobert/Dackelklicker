function starteSkript(){
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].id == 'push') {
        buttons[i].disabled = false;
		if(buttons[i].innerHTML=='starten'){
		buttons[i].disabled = true;
		}
    }
}

punkteErhoehung();
dackelKaufen();
dackelLOOPdaLOOP();
pausenWertReduzieren();


}
function punkteErhoehung(){
var Punkt = document.getElementById("klickPunkte");
		klickPunkte = parseInt(array[0]);
		Punkt.value = klickPunkte;
		klickPunkte++;
		array[0] = klickPunkte;
		dackelPreis();
		return klickPunkte;
		}
		
function dackelPreis(){
	var DackelBPreis = document.getElementById("dackelPreisRueckgabe");
	dackelPreisRueckgabe = parseInt(array[2]);
	DackelBPreis.value = dackelBooster*dackelBoosterPreis;
	array[2] = DackelBPreis.value;
return dackelPreisRueckgabe;
}
function dackelKaufen(){
	var dArray = document.getElementById("array");
	var ifEins = parseInt(array[0]);
	var ifZwei = parseInt(array[2]);
	if(parseInt(ifEins,10)<parseInt(ifZwei,10)){
		alert("ungenuegende wuffe");
		return 0;
	}else if(parseInt(ifEins,10)>=parseInt(ifZwei,10)){
		array[0]=parseInt(array[0])-parseInt(array[2]);
		array[1]++;
		dackelBooster = array[1];
		array[2]=parseInt(array[1])*parseInt(array[3]);		
		dackelPreis();
		array[0]=parseInt(array[0],10)-1;
		punkteErhoehung();
	}
return dackelBooster;
}
function dackelLOOPdaLOOP(){
	var dArray = document.getElementById("array");
	var bool = true;
	array[0]=parseInt(array[0],10)+((parseInt(array[1],10))+(parseInt(array[0],10))/100);
	setTimeout(dackelLOOPdaLOOP,(parseInt(array[4],10)-parseInt(array[5],10)));
	if(dackelBooster>0){
		punkteErhoehung();
	}
}
function reduziererPreis(){
	var reduziererBPreis = document.getElementById("pausenWertReduziererRueckgabe");
	pausenWertReduziererRueckgabe = parseInt(array[7],10);
	reduziererBPreis.value = pausenWertReduzier*pausenWertReduziererPreis;
	array[7] = reduziererBPreis.value;
return pausenWertReduziererRueckgabe;
}
function pausenWertReduzieren(){
	var dArray = document.getElementById("array");
	var ifEins = parseInt(array[0]);
	var ifZwei = parseInt(array[7]);
	if(parseInt(ifEins,10)<parseInt(ifZwei,10)){
		alert("ungenuegende wueffe");
		return 0;
	}else if(parseInt(ifEins,10)>=parseInt(ifZwei,10)){
		array[0]=parseInt(array[0])-parseInt(array[7]);
		array[5]++;
		pausenWertReduzier = array[5];
		array[7]=parseInt(array[5])*parseInt(array[6]);		
		reduziererPreis();
		array[0]=parseInt(array[0],10)-1;
		punkteErhoehung();
	}
return pausenWertReduzier;
}