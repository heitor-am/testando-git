const keys = {
  ArrowUp() {
    return "Para cima"
  },
  'ArrowDown': () => "Para baixo",
  'ArrowRight': () => "Para direita",
  "ArrowLeft": () => "Para esquerda"
}

window.addEventListener('keydown', (e) => {
  console.log(keys[e.key])
})