import express, {Request, Response} from "express"

const app = express()

console.log("App started (ESM)!");

app.set("view engine", "twig");

const btn = document.createElement("button");
btn.innerText = "Load Login Feature";

btn.onclick = async () => {
    const module = await import("./login.js");
    module.showLoginForm();
};

document.body.appendChild(btn);
