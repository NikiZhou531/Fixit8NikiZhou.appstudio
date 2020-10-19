let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];
let firstName = "";
btnSubmitMember.onclick=function(){
  firstName = inptFirstName.value
  if(members.includes(firstName))
    lblmember.textContent = 'You are a member!'
  else
    lblmember.textContent = 'You are not a member, let me add you!'
    members.push(firstName);
    console.log(members);
}
 