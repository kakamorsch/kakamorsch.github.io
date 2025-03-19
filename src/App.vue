<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <header class="text-center p-6">
      <h1 class="text-5xl font-bold text-green-400">Kaio Morsch</h1>
      <p class="mt-2 text-lg">Senior Software Engineer</p>
      <p class="mt-2 text-sm">Urubici, Santa Catarina, Brasil</p>
      <p class="mt-2 text-sm">+55 21 99536-4470</p>
      <p class="mt-2 text-sm">kakamorsch@gmail.com</p>
    </header>

    <section class="mt-10 max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h2 class="text-3xl font-bold text-green-400">Resumo</h2>
      <p class="mt-4 text-lg">
        Desenvolvedor web dedicado com mais de 4 anos de experiência na construção de aplicativos escaláveis e eficientes usando Vue e React, com testes utilizando Cypress e JEST. Proficiente em sistemas Unix e apaixonado por alavancar a tecnologia para impulsionar o crescimento dos negócios. Com uma sólida experiência em desenvolvimento de e-commerce, implementei com sucesso gateways de pagamento e otimizei experiências de compras online. Estou animado para me juntar a uma equipe que valoriza a inovação, a colaboração e o aprendizado contínuo.
      </p>
    </section>

    <section class="mt-10 max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h2 class="text-3xl font-bold text-green-400">Experiência</h2>
      <ul class="mt-4 list-disc list-inside">
        <li><strong>Pagar.me, Remoto — Software Engineer III</strong> (Fevereiro 2022 - Agosto 2024)
          <ul>
            <li>Desenvolvi e mantive mais de 15 integrações de e-commerce usando Vue, React e APIs RESTful, resultando em um aumento de 30% nas taxas de adoção do cliente.</li>
            <li>Colaborei com equipes multifuncionais para entregar produtos de alta qualidade, utilizando metodologias ágeis.</li>
            <li>Implementei uma solução de gateway de pagamento que aumentou a receita em 45%.</li>
          </ul>
        </li>
        <li><strong>Grupo Soma, Rio de Janeiro — Front End Software Engineer</strong> (Setembro 2021 - Fevereiro 2022)
          <ul>
            <li>Desenvolvi uma nova experiência de e-commerce no projeto Animale, melhorando a usabilidade da plataforma.</li>
          </ul>
        </li>
        <li><strong>ACCT, Remoto — Desenvolvedor Júnior</strong> (Fevereiro 2021 - Setembro 2021)
          <ul>
            <li>Focado em front-end, trazendo novidades para ecommerces VTEX.</li>
          </ul>
        </li>
        <li><strong>Fábrica Digital, Rio de Janeiro — Analista de Sistemas</strong> (Setembro 2018 - Janeiro 2021)
          <ul>
            <li>Atuava em suporte e desenvolvimento, utilizando tecnologias como JQuery, Vuejs, Python e Django.</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mt-10 max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h2 class="text-3xl font-bold text-green-400">Formação</h2>
      <p class="mt-4 text-lg">
        <strong>Unicarioca, Rio de Janeiro</strong> — Curso Superior de Tecnologia (CST) (Agosto 2013 - Março 2017)
      </p>
    </section>

    <section class="mt-10 max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h2 class="text-3xl font-bold text-green-400">Principais Competências</h2>
      <ul class="mt-4 list-disc list-inside">
        <li>Programação lógica</li>
        <li>Programação (computação)</li>
        <li>Figma (Software)</li>
        <li>Desenvolvimento em JavaScript, VueJS, React e NodeJS</li>
        <li>Metodologias Ágeis (SCRUM, Kanban)</li>
        <li>Ferramentas de CI/CD (Azure DevOps,Jenkins)</li>
        <li>Testes (JEST, Cypress)</li>
      </ul>
    </section>

    <footer class="mt-8 text-center">
      <p>Entre em contato:</p>
      <div class="flex flex-col space-y-2">
        <a class="text-green-400 hover:underline" href="mailto:kakamorsch@gmail.com">kakamorsch@gmail.com</a>
        <a class="text-green-400 hover:underline" href="https://www.linkedin.com/in/kakamorsch">Meu LinkedIn</a>
        <a class="text-green-400 hover:underline" href="https://x.com/KaioMorsch">Meu X(Twitter)</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
