import { init } from "./main.js";

export function sorBeszur(lista){
    const submitELEM = $("#submit");
    submitELEM.on("click", function(event) {
        event.preventDefault();
        const adat={
            nev:$("#nev").val(),
            kor:$("#kor").val(),
            nem:$("input[name='nem']:checked").val()==="ferfi"? true : false
        }
        if($(".valid-feedback").eq(0).css("display")==="block" && $(".valid-feedback").eq(1).css("display")==="block"){
        lista.push(adat);
        console.log(lista);
        init(lista); 
        }else{
            alert("HIBÁS ADATOK");
        }
    })
}