<h1>:stopwatch: Cronômetro - Stopwatch :stopwatch:</h1>
<br>
<img src="https://github.com/eduardobetti/stopwatch/blob/main/mockup-stopwatch.png?raw=true" alt="mockup-stopwatch">
<br><br>
<p>Cronômetro desenvolvido no módulo JavaScript do DevClub, utilizando as funções start(), stop(), setInterval() e clearInterval().
Nesta aplicação, desenvolvi comandos que são acionados a partir dos botões Start (que está ativado originalmente), Stop e Reset (que estão desativados originalmente).</p>
<p>Ao clicar no botão Start, o cronômetro começa a adicionar centésimos de segundo no campo correspondente, que ao somarem 100, adicionam 1 segundo, que após completarem 60 segundos adicionam 1 minuto e por aí vai.
Também ao clicar em Start, este botão passa a estar desativado, tornando ativo o botão Stop, que ao ser clicado interromperá a função setInterval e acionará a função clearInterval, parando o cronômetro.
Ao clicar em stop, este botão passará a estar desativado e ativará novamente Start, além de habiltiar o botão Reset. Caso Start seja novamente acionado, o cronômetro retomará sua função setInterval().
Caso Reset seja acionado, o cronômetro retomará seu estado inicial, zerando o contador e habilitando novamente apenas o botão Start.</p>
<p>Projeto 100% responsivo.</p>
<br>
<h2>Tecnologias utilizadas:</h2>

- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<br>
<h2>Curiosidades:</h2>

<p>Decidi fazer uma aplicação esteticamente mais simples, mas extremamente funcional.
Primeiramente havia desenvolvido sem a variável dos centésimos de segundo, mas percebi que sem ela, havia um problema:
caso acionasse o botão Stop pouco antes de completar o segundo, quando retomasse em Start, ele iniciaria a contagem das frações de segundo do zero, o que causaria um atraso no cronômetro.
Para tanto, decidi corrigir aplicando mais uma variável, de uma unidade menor (centésimo de segundo) que corrigiu este problema.</p>
