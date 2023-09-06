import "./style.css";

const btn = document.querySelector("button") as HTMLButtonElement;
const input = document.querySelector("input") as HTMLInputElement;
const messageText = document.createElement("p") as HTMLParagraphElement;
const app = document.querySelector('#app') as HTMLDivElement;

btn.addEventListener("click", async () => {
  let textSend = input.value
  const res = await fetch(`/hello/${textSend}`)
  const message = await res.text()
  input.value = "";
  app.appendChild(messageText)
  messageText.innerText = message
})
