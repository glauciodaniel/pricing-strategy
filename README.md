# Pricing Strategy

Este projeto implementa uma estratégia de cálculo de preços com base em diferentes regras de desconto. Ele é projetado para ser extensível e modular, permitindo adicionar novas estratégias de desconto facilmente.

## Estrutura do Projeto

- **src/**: Contém a lógica principal do cálculo de preços e estratégias de desconto.
- **tests/**: Contém os testes unitários para validar o comportamento do sistema.
- **.gitignore**: Define os arquivos e diretórios a serem ignorados pelo Git.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd pricing-strategy
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

Para rodar os testes unitários, execute:

```bash
npm test
```

## Estrutura de Descontos

O projeto suporta múltiplas estratégias de desconto, como:

- **LoyalCustomerStrategy**: Desconto para clientes fiéis.
- **BulkDiscountStrategy**: Desconto para compras em grande quantidade.
- **NovemberElectronicsStrategy**: Desconto sazonal para eletrônicos em novembro.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT.
