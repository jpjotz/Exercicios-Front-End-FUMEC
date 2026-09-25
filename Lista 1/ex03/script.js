function enviar() {

    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const mensagem = document.getElementById('mensagem');

    const media = (nota1 + nota2 + nota3) / 3;

    event.preventDefault();

    if (media >= 60) {
        mensagem.innerText = "Aprovado";
    } else if (media > 45) {
        mensagem.innerText = 'Recuperação'
    } else {
        mensagem.innerText = "Reprovado"
    }
}
