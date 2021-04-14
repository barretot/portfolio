window.onhashchange = (event) => {
  const oldURL = event.oldURL.split('#')[1];
  const newURL = event.newURL.split('#')[1];
  console.log(oldURL, newURL);
  const oldMenu = document.querySelector(`nav a[href="#${oldURL}"]`);
  const newMenu = document.querySelector(`nav a[href="#${newURL}"]`);
  console.log(oldMenu, newMenu);
  oldMenu && oldMenu.classList.remove('selected');
  newMenu && newMenu.classList.add('selected');
};

function typeWritter(texto, tempo) {
  let char = texto.split('').reverse();
  let typer = setInterval(function () {
    if (!char.length) return clearInterval(typer);
    let next = char.pop();
    document.querySelector('#text').innerHTML += next;
  }, 150);
}
typeWritter('Desenvolvedor Web', 'log', 100);
