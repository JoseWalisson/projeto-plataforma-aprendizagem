const input = document.querySelector("#h1");
const msg = document.querySelector("#mensagem");
const button = document.querySelector("#link");

function inputValor() {
    const valorUser = input.value;
        if (valorUser === "<h1>Olá, mundo!</h1>") {
            setTimeout(() => {
                console.log("valor correto!");
                msg.style.display = "block";
                msg.style.color = "green";
                msg.innerHTML = "Parabéns, você conseguiu!";
            }, 1000);

            setTimeout(() => {
                window.location = "../index.html";
            }, 3500);
        } else if (valorUser === "") {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Digite algo antes de enviar!";
            console.error("Erro: Digite algo antes de enviar!");
        } else if (valorUser === "<h1></h1>") {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Coloque o texto 'Olá, mundo!' dentro do h1";
            console.error("Erro: Coloque o texto 'Olá, mundo!' dentro do h1");
        } else {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Não é bem isso!";
            console.error("Erro: Não é bem isso!");
        }
}

button.addEventListener("click", inputValor);