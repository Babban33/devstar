$(document).ready(function(){

var specialElementHandlers = {
"#Edito":function(element,renderer){
    return true;
},
};

$("$cmd").click(function(){


    var doc = new jsPDF();
    doc.fromHTML($("$target").html(),15,15,{
        "width":170,
        "elementHandlers":specialElementHandlers

    });


    
});

   doc.save("Resume-template.pdf");


});