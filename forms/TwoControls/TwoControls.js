let members2 = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];

members2.onshow=function(){
    // always clear before populating
    drpMembers.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i <= members2.length - 1; i++) 
        drpMembers.addItem(members2[i])
}
  
drpMembers.onclick=function(s){
    if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpMembers.value = s   // make dropdown show choice user made
    console.log(`The user chose ${s} and .selection is ${drpMembers.selection}.`)
  }
}