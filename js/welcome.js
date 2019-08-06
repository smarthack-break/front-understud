window.onload = ()=> {
  document.querySelector("#btn").addEventListener("click", ()=> {
  document.querySelector("#selector").classList.remove("welcome");
  document.querySelector("#selector").classList.add("register");
  })
}
