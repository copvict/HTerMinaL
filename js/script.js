var domcli=document.getElementById("cli"); //Idenfier used in HTML(Usage in HTML: <div id="cli"></div>)`
var com="This is where the text goes.<nThis is the next line.<nThis is the last line."; //Custom text goes in here. Use "<n" to break the text to next line
var lineArr=com.split("<n");
var stringArr=[];
var dial=true;
var eof=false;
for(var i=0; i<lineArr.length; i++){
  stringArr.push(lineArr[i]);
}
var i=0, j=0;
function addChar(){
  if(eof){
    var endcli=document.getElementById("end");
    endcli.style.display="none";
    if(dial){
      endcli.style.display="";
    }
    else{
      endcli.style.display="none";
    } 
    dial=!dial;
  }
  if(stringArr[i][j]){
    if(j===0){
      domcli.innerHTML+="<p style=\"color:#00ff00; display:inline;\">user@devicename:~$ </p>"+stringArr[i][j++]; //Change custom prompt(custom PS1)
    }
    else{
      domcli.innerHTML+=stringArr[i][j];
      j++;
    }
  } 
  else if(stringArr[i]){
    i++;
    domcli.innerHTML+="<br/>";
    j=0;
    if(i>=stringArr.length){
      domcli.innerHTML=domcli.innerHTML.toString().substr(0,domcli.innerHTML.toString().length-4)+"<span id=\"end\">|</span>";
      eof=true;
    }
  }
}
setInterval(addChar,70); //Set typing speed in milliseconds