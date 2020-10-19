let accountName = ""
// correct login is: Smith and pw 123Dogs#  

btnSubmit.onclick=function(){
  accountName = inptAccountName.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#"))
    ChangeForm(Welcome)
  else { 
    lblError.hidden = false
    lblError.textContent = "That login is not recognised. Please try again."
    inptAccountName.value = ""
    inptPassword.value = ""
  }
}


btnClear2.onclick=function(){
  document.getElementById('inptAccountName').value = ''
  document.getElementById('inptPassword').value = ''
}
