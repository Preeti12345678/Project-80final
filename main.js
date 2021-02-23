

function getParagraph1(){
    var inputs=[];
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("para_input_box_" +i).value);
        document.getElementById("ShowParagraph1").innerHTML=inputs.join(".");
    }

}
function getParagraph2(){
    var inputs=[];
    for(var i=7; i<=12; i++){
        inputs.push(document.getElementById("para_input_box_" +i).value);
        document.getElementById("ShowParagraph2").innerHTML=inputs.join(".");
    }
}