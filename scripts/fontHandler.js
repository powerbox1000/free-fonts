var characters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ + = [ ] { } \\ | ; : ' \" . , < > / ? ` ~";

var previewDiv = document.getElementById("previewDiv");
var fontStyle = document.getElementById("fType");
var fontName = document.getElementById("fName");

function previewFont(){
  previewDiv.className = fontName.value;
  previewDiv.innerText = characters;
}

function done(){
  var generated = "https://powerbox1000.github.io/free-fonts/%1/%2".replace("%1",fontStyle.value).replace("%2",fontName.value);
if(fontStyle.value == "css"){
  try{
  var el = document.createElement("button");
  el.setAttribute("data-clipboard-target","#fName");
  var clip = new ClipboardJS(el);
  alert("CSS URL copied to clipboard.");
  }catch(e){
    console.warn(e);
    alert("Error copying CSS URL. The CSS URL is: "+generated);
  }
}else{
  window.open(generated + ".otf");
}
}
