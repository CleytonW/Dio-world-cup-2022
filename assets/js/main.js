function showConfet(id) {
  const element = document.getElementById(id);
  party.confetti(element);
}

setInterval(() => {
  showConfet('br-01')
}, 2000)


