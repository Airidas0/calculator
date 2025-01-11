//Calculator program
const display = document.getElementById('display');
function addNumber(num) {
    display.value += num;
}
function clearDisplay() {
    display.value = '';
}
function calculate(){
    try{
     
        display.value = eval(display.value);
       
    }
    catch(e){
        display.value = 'Invalid Operation';
    }
    
}
