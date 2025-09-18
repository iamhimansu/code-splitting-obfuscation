export function showLoginForm() {
    console.log("Login form loaded (ESM)!");
    const div = document.createElement("div");
    div.innerText = "This is the login form.";
    document.body.appendChild(div);
}
