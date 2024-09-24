function scuberGreetingForFeet(isfeet){
  if(isfeet<=400 ) {
    return "This one is on me!"
  }

  else if(isfeet>=400 && isfeet<=2000){
    return "That will be twenty bucks."
  }

  else if(isfeet>=2001 && isfeet<=2499){
    return "I will gladly take your thirty bucks."
  }

  else if(isfeet>=2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  if(city === "NYC") {
    return "Ok, sounds good."
  }

  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if(tip === "generous") {
    return "Thank you so much."
  }

  else if(tip==="not as generous") {
    return "Thank you."
  }

  else {return "Bye."}
}