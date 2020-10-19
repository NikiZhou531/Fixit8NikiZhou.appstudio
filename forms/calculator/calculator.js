function addTwo(n1,n2) {
  return Number(n1) + Number(n2)
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
let answer = 0


btnAdd.onclick=function(){
  lblCal.value = addTwo(inptNum1.value,inptNum2.value)
}

btnMul.onclick=function(){
  lblCal.value = multiplyTwo(inptNum1.value,inptNum2.value)
}

btnClear.onclick=function(){
  document.getElementById('inptNum1').value = ''
  document.getElementById('inptNum2').value = ''
  lblCal.value = ""
}