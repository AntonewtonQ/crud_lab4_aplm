
---

# Employee CRUD App

Um aplicativo de CRUD para gerenciamento de funcionários, utilizando backend em Node.js com Express e frontend em React Native. O aplicativo permite adicionar, editar e remover funcionários, com integração a uma API para persistência de dados.

## Índice

- [Instalação](#instalação)
- [Configuração do Backend](#configuração-do-backend)
- [Configuração do Frontend](#configuração-do-frontend)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas da API](#rotas-da-api)
- [Exemplo de Uso](#exemplo-de-uso)
- [Licença](#licença)

---

## Instalação

### Pré-requisitos

- Node.js v14+ (para o backend)
- Expo CLI (para o frontend em React Native)
- Um dispositivo ou emulador para testar o aplicativo

### Clonando o Repositório

```bash
git clone https://github.com/seuusuario/nome-do-repositorio.git
cd nome-do-repositorio
```

## Configuração do Backend

1. Entre na pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. O backend estará rodando em `http://localhost:3000`. Certifique-se de que o backend está acessível pela rede para que o frontend possa se conectar (use o IP local do seu dispositivo para testar em um emulador).

## Configuração do Frontend

1. Entre na pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Atualize o arquivo `EmployeeCrud.tsx` com o endereço IP do backend.

4. Inicie o Expo:

   ```bash
   npx expo start
   ```

5. Escaneie o QR code com o app Expo Go ou use um emulador para abrir o aplicativo.

---

## Funcionalidades

- Adicionar um novo funcionário (nome e e-mail)
- Editar informações de um funcionário existente
- Remover funcionários
- Exibir a lista de funcionários com atualização em tempo real

---

## Estrutura do Projeto

```plaintext
nome-do-repositorio/
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── services/
│   │   └── employeeService.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── components/
│   │   └── EmployeeCrud.tsx
│   ├── App.tsx
└── README.md
```

---

## Rotas da API

- `GET /api/employees` - Retorna todos os funcionários.
- `POST /api/employees` - Adiciona um novo funcionário.
- `PUT /api/employees/:id` - Atualiza os dados de um funcionário pelo ID.
- `DELETE /api/employees/:id` - Remove um funcionário pelo ID.

---

## Exemplo de Uso

### Adicionando um Funcionário

1. Abra o aplicativo e preencha o nome e e-mail.
2. Clique em "Adicionar Funcionário".
3. O funcionário será exibido na lista.

### Editando um Funcionário

1. Clique no botão "Editar" ao lado do funcionário.
2. Altere o nome ou e-mail e clique em "Atualizar Funcionário".

### Removendo um Funcionário

1. Clique no botão "Remover" ao lado do funcionário.
2. Confirme a remoção.

---

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---

### Contribuições

Sinta-se à vontade para contribuir com o projeto através de *pull requests*. Para grandes mudanças, abra uma *issue* primeiro para discutir o que você gostaria de alterar.

---

**Feito com ❤️ por [Seu Nome](https://github.com/AntonewtonQ)**
