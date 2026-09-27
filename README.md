# 🚀 Cadastro de Usuários - FullStack (React & Node.js)

Aplicação web desenvolvida para o gerenciamento de cadastros de usuários, permitindo registrar, listar, atualizar e deletar informações de forma simples e intuitiva, com persistência de dados em arquivo JSON.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

### **Front-end**

- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) - Biblioteca para construção da interface de usuário.
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem principal do front-end.
- [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) - Cliente HTTP para comunicação com a API.
- **Styled Components** - Estilização baseada em componentes (CSS-in-JS).

### **Back-end**

- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) - Ambiente de execução JavaScript no servidor.
- [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) - Framework web minimalista para Node.js.
- **File System (fs)** - Módulo nativo do Node.js para leitura e escrita de arquivos JSON (`users.json`).

---

## ✨ Funcionalidades

- **Cadastro de Usuários (POST):** Envio de nome, e-mail e idade com validação de campos.
- **Listagem de Usuários (GET):** Consulta de todos os registros ou de um usuário específico por ID.
- **Atualização de Dados (PUT):** Edição flexível de informações (mantendo o ID original e atualizando apenas os campos alterados).
- **Remoção de Usuários (DELETE):** Exclusão de registros da base de dados.
- **Persistência Local:** Armazenamento automático dos dados em um arquivo `users.json`.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados na sua máquina.

### 1. Rodando o Back-end

```bash
# Entre na pasta do back-end
cd back-end

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
# O servidor rodará na porta 3000 (http://localhost:3000)
```
# register-users-backend-devclub
