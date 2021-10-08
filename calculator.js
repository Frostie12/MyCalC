function clearScreen(){
    document.getElementById("result").value="";
}
function press(value){
    document.getElementById("result").value+=value;
}

function del(value)
{
  result.value = result.value.slice(0, - 1); 
}
function calculate()
{
    var p=document.getElementById("result").value;
    document.getElementById("result").value=eval(p);
}