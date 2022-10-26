const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');



CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto<=30){
        let aux = (10*100) + (10*50) + (resto-20)*20;
        flujo = aux/24;
    }
    if (resto<=20){
        let aux = (10*100) + (resto-10)*50;
        flujo = aux/24;
    }
    if (resto<=10){
        let aux = resto*100
        flujo = aux/24
    } 
    return Math.round(flujo);
}