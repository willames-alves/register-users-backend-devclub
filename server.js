import express from "express";
import cors from "cors";

import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

const filePath = path.resolve("users.json");

// Função auxiliar para ler os usuários do arquivo JSON
const readUsers = () => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Função auxiliar para salvar os usuários no arquivo JSON
const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
};

app.get("/users", (req, res) => {
  const users = readUsers();
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const users = readUsers();
  const user = users.find(
    (u, index) => u.id === userId || index.toString() === userId,
  );

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  // Validação simples dos campos obrigatórios
  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios: name, email e age." });
  }

  const users = readUsers();

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    age,
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ message: "User created successfully", user: newUser });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email, age } = req.body;
  const users = readUsers();

  const userIndex = users.findIndex(
    (u, index) => u.id === userId || index.toString() === userId,
  );

  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  // Atualiza os dados mantendo o ID original
  users[userIndex] = {
    ...users[userIndex],
    ...(name && { name }),
    ...(email && { email }),
    ...(age && { age }),
  };

  saveUsers(users);
  res.status(200).json({
    message: `User with ID ${userId} updated`,
    user: users[userIndex],
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  let users = readUsers();

  const initialLength = users.length;
  users = users.filter(
    (u, index) => u.id !== userId && index.toString() !== userId,
  );

  if (users.length === initialLength) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  saveUsers(users);
  res.status(200).json({ message: `User with ID ${userId} deleted` });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
