const historico = document.querySelector('.historico');
let cronometro_id = 0;
const comecar = () => {

    const hr =  document.querySelector('.horas');
    const min = document.querySelector('.minutos');
    const sec = document.querySelector('.segundos');
    const dec = document.querySelector('.decimos');

    let h = 0;
    let m = 0;
    let s = 0;
    let d = 0;

    cronometro_id = setInterval(() => {
        hr.innerHTML = h < 10 ? '0' + h : h;
        min.innerHTML = m < 10 ? '0' + m : m;
        sec.innerHTML = s < 10 ? '0' + s : s;
        dec.innerHTML = d < 10 ? '0' + d : d;
    
        if (d <= 9) { d++ }
        else if (s < 59) { d = 0; s++ }
        else if (m < 59) { d = 0; s = 0; m++ }
        else if (h < 23) { d = 0; s = 0; m = 0; h++ }
    }, 100);

}
const pausar = () => {
    clearInterval(cronometro_id)
}
const zerar = () => {
clearInterval(cronometro_id)

    document.querySelector('.horas'   ).innerHTML = '00';
    document.querySelector('.minutos' ).innerHTML = '00';
    document.querySelector('.segundos').innerHTML = '00';
    document.querySelector('.decimos' ).innerHTML = '00';

    historico.innerHTML = `<p>Historico</p>`

}