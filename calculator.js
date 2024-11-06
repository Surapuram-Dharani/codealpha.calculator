let input = document.getElementById('input');
function display(value){
    if(value==='Ac'){
        input.value = '';
    }
    else{
        input.value += value;
    }
}
function clear(){
    input.value='';
}
function del(){
   input.value = input.value.slice (0,-1);
}
function equal(){
    try{
    input.value = eval(input.value);
    }
    catch(error){
        input.value = 'error'
    }
}