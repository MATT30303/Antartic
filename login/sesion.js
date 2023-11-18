const btnSingIn = document.getElementById("sign-in"),
      btnSingUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formlogin = document.querySelector(".login");


btnSingIn.addEventListener("click", e => {
    formRegister.classList.add("hide")
    formlogin.classList.remove("hide")
})      


btnSingUp.addEventListener("click", e => {
    formRegister.classList.remove("hide")
    formlogin.classList.add("hide")
})