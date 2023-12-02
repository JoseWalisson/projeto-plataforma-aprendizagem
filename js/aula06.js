const input = document.querySelector("#h1");
const resultado = document.querySelector("#resultado");
const continuar = document.querySelector("#continuar");
const msg = document.querySelector("#mensagem");
const mensagem = document.querySelector("#msg");
const button = document.querySelector("#link");
const previa = document.querySelector("#previa");

function inputValor() {
    const valorUser = input.value;
        if (valorUser === "<style></style>") {
            setTimeout(() => {
                console.log("valor correto!");
                button.style.display = "none";
                msg.innerHTML = "Boa dev! &#x1F604;";
                mensagem.innerHTML = "&#x1F610; Por enquanto, você verá que não ouve nenhuma alteração visual.";
                mensagem.style.display = "block";
                msg.style.display = "block";
                mensagem.style.color = "#d4d404";
                mensagem.style.backgroundColor = "#000000cb"
                msg.style.color = "#008000";
                input.disabled = "off";
                previa.innerHTML = "A prévia do seu código está abaixo!";
                resultado.style.display = "flex";
                continuar.style.display = "block";
            }, 1000);

        } else if (valorUser === "") {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Digite algo antes de enviar!";
            console.error("Erro: Digite algo antes de enviar!");
        } else {
            msg.style.display = "block";
            msg.innerHTML = "Erro: Não é bem isso!";
            console.error("Erro: Não é bem isso!");
        }
}


button.addEventListener("click", inputValor);