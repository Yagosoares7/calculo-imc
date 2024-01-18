var nm_usuario = prompt('Digite seu nome: ');
var altr_usuario = prompt('Digite sua altura em centímetros: ');
var p_usuario = prompt('Digite o seu peso: ');
altr_usuario = parseFloat(altr_usuario);
p_usuario = parseFloat(p_usuario);
conver_altr_usuario = (altr_usuario / 100);
m = (p_usuario / conver_altr_usuario**2);
classificacao = null;

if (m < 16){
    classificacao = 'Baixo peso muito grave';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 16 && m <= 16.99) {
    classificacao = 'Baixo peso grave';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 17 && m <= 18.49) {
    classificacao = 'Baixo peso';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 18.50 && m <= 24.99) {
    classificacao = 'Peso normal';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 25 && m <= 29.99) {
    classificacao = 'Sobrepeso';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 30 && m <= 34.99) {
    classificacao = 'Obesidade grau I';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else if (m >= 35 && m <= 39.99) {
    classificacao = 'Obesidade grau II';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
} else {
    classificacao = 'Obesidade grau III';
    alert(nm_usuario + ' possui índice de massa corporal igual a ' + m + ', sendo classificado como: ' + classificacao);
}