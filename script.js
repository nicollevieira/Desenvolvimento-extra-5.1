const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Minha página com JavaScript";

link.innerText = "Visite o site da Proz Educação";

listaNaoOrdenada.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.youtube.com">YouTube</a></li>
    <li><a href="https://github.com">GitHub</a></li>
`;