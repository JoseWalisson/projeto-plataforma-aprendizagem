const opcao1 = document.querySelectorAll("#questoes label")[0];
const opcao2 = document.querySelectorAll("#questoes label")[1];
const opcao3 = document.querySelectorAll("#questoes label")[2];
const opcao4 = document.querySelectorAll("#questoes label")[3];
const opcoes = document.querySelectorAll("#questoes input");
const msg = document.querySelector("#msg");
const verificarInput = document.querySelector("#verificar");

console.log(questoes);

const verificarOp1 = () => {
    opcao1.style.backgroundColor = "#e9e4e4";
    opcao2.style.backgroundColor = "#fff";
    opcao3.style.backgroundColor = "#fff";
    opcao4.style.backgroundColor = "#fff";
    return;
}

const verificarOp2 = () => {
    opcao2.style.backgroundColor = "#e9e4e4";
    opcao1.style.backgroundColor = "#fff";
    opcao3.style.backgroundColor = "#fff";
    opcao4.style.backgroundColor = "#fff";
    return;
}

const verificarOp3 = () => {
    opcao3.style.backgroundColor = "#e9e4e4";
    opcao1.style.backgroundColor = "#fff";
    opcao2.style.backgroundColor = "#fff";
    opcao4.style.backgroundColor = "#fff";
    return;
}

const verificarOp4 = () => {
    opcao4.style.backgroundColor = "#e9e4e4";
    opcao1.style.backgroundColor = "#fff";
    opcao3.style.backgroundColor = "#fff";
    opcao2.style.backgroundColor = "#fff";
    return;
}

function verificarResposta() {

    // opcoes.forEach(opcao => {
    //     if (opcao.checked) {
    //         opcaoSelecionada = opcao;
    //     }
    // });

    const opcaoSelecionada = Array.from(opcoes).find(opcao => opcao.checked);

    if (opcaoSelecionada && opcaoSelecionada.value === "correta") {

        setTimeout(() => {
            verificarInput.style.display = "none";
            opcao4.style.color = "#008000";
            opcao4.style.fontWeight = "bold";
            opcao4.style.backgroundColor = "e9e4e4";
            msg.style.display = "block";
            msg.style.color = "#008000";
            msg.innerHTML = "Vamos nessa!";
        }, 1000);

        setTimeout(() => {
            window.location = "../aulas/aula07.html";
        }, 5500);
    } else if (opcaoSelecionada && opcaoSelecionada.value === "errado2") {

        setTimeout(() => {
            verificarInput.style.display = "none";
            opcao2.style.color = "#e60c0c";
            opcao2.style.fontWeight = "bold";
            opcao2.style.backgroundColor = "#e9e4e4";
            msg.style.display = "block";
            msg.innerHTML = "Hum... Ainda não!";
        }, 1000);

        setTimeout(() => {
            window.location = "../aulas/aula07.html";
        }, 5500);
        console.error("Hum... Ainda não!");
    } else if (opcaoSelecionada && opcaoSelecionada.value === "errado1") {
        setTimeout(() => {
            verificarInput.style.display = "none";
            opcao1.style.color = "#e60c0c";
            opcao1.style.fontWeight = "bold";
            opcao1.style.backgroundColor = "#e9e4e4";
            msg.style.display = "block";
            msg.innerHTML = "Vamos com calma, tente novamente!";
        }, 1000);

        setTimeout(() => {
            window.location = "../aulas/aula07.html";
        }, 5500);
        console.error("Vamos com calma, tente novamente!");
    } else if (opcaoSelecionada && opcaoSelecionada.value === "errado3") {
        setTimeout(() => {
            verificarInput.style.display = "none";
            opcao3.style.color = "#e60c0c";
            opcao3.style.fontWeight = "bold";
            opcao3.style.backgroundColor = "#e9e4e4";
            msg.style.display = "block";
            msg.innerHTML = "Você infelizmente errou!";
        }, 1000);

        setTimeout(() => {
            window.location = "../aulas/aula07.html";
        }, 5500);
        console.error("Você infelizmente errou!");
    } else {
        msg.innerHTML = "Selecione uma opção antes de verificar!";
        msg.style.display = "block";
        console.error("Selecione uma opção antes de verificar!");
    }
}

verificarInput.addEventListener("click", verificarResposta);

opcao1.addEventListener("click", verificarOp1);
opcao2.addEventListener("click", verificarOp2);
opcao3.addEventListener("click", verificarOp3);
opcao4.addEventListener("click", verificarOp4);