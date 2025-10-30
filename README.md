# Trabalho Final - Automação Web (PGATS)

Este projeto utiliza Cypress para automação de testes end-to-end em uma aplicação web.

Os testes são realizados sobre o site: https://automationexercise.com/

Desenvolvido para a disciplina de automação de testes na camada de interface (Web) da PGATS.

## Estrutura
- Testes em `cypress/e2e/`
- Dados de teste em `cypress/fixtures/`
- Funções auxiliares em `cypress/support/helpers`
- Relatórios em `cypress/reports/`

## Como executar os testes
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute os testes:
   ```bash
   npx cypress run
   ```

3. Para visualizar e executar os testes pela interface do Cypress:
    ```bash
    npx cypress open
    ```

## Testes implementados

- **contactUs.cy.js**
   - Caso de teste 6: Formulário de contato
- **home.cy.js**
   - Caso de teste 10: Verificar assinatura na página inicial
- **login.cy.js**
   - Caso de teste 2: Login do Usuário com e-mail e senha corretos
   - Caso de teste 3: Login do usuário com e-mail e senha incorretos
   - Caso de teste 4: Fazer logout do usuário
- **order.cy.js**
   - Caso de teste 15: Fazer pedido: Registre-se antes de finalizar a compra
- **product.cy.js**
   - Caso de teste 8: Verificar todos os produtos e a página de detalhes do produto
   - Caso de teste 9: Pesquisar produto
- **register.cy.js**
   - Caso de teste 1: Cadastrar Usuário
   - Caso de teste 5: Cadastrar usuário com e-mail existente


