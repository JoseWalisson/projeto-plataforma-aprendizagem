const input = document.querySelector("#h1");
const resultado = document.querySelector("#resultado");
const continuar = document.querySelector("#continuar");
const msg = document.querySelector("#mensagem");
const button = document.querySelector("#link");
const previa = document.querySelector("#previa");

function inputValor() {
    const valorUser = input.value;
        if (valorUser === "text-align: center;") {
            setTimeout(() => {
                console.log("valor correto!");
                button.style.display = "none";
                msg.innerHTML = "Muito bem!";
                msg.style.display = "block";
                msg.style.color = "#008000";
                input.disabled = "off";
                previa.innerHTML = "A prévia do seu código está abaixo!";
                resultado.style.display = "flex";
                // resultado.style.justi = "flex";
                continuar.style.display = "block";
            }, 1000);

        } else if (valorUser === "") {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Digite algo antes de enviar!";
            console.error("Erro: Digite algo antes de enviar!");
        } else if (valorUser === "h1 {color: green}") {
            msg.style.display = "block";
            msg.innerHTML = "Erro: faltou um ; &#x1F605;";
            console.error("Erro: faltou um ;");
        } else {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Não é bem isso!";
            console.error("Erro: Não é bem isso!");
        }
}


button.addEventListener("click", inputValor);