import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3005",
});

export const createSession = async (email, senha) => {
  return api.post("/loginPessoas", { email, senha });
};

export const getUsers = async () => {
  return api.get("/pessoas");
};
