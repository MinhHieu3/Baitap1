function nut(kt) {
    document.getElementById('in').value +=kt;
}
function  cal(){
    document.getElementById('in').value=eval(document.getElementById('in').value);
}
function reset() {
    document.getElementById('in').value= '';

}