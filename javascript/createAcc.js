let cCuenta = document.getElementById("C-Acc")

cCuenta.addEventListener(`submit`, (noguardar) => {
  noguardar.preventDefault()

  let CUser = document.getElementById("C-user").value
  let CPassword = document.getElementById("C-password").value
  let ConfirmPassword = document.getElementById("CC-password").value

  if(CPassword === ConfirmPassword){
    localStorage.setItem('usuario', CUser)
    localStorage.setItem('contraseña', CPassword)
  }else{
    alert('las contraseñas no coinciden')
  }

})