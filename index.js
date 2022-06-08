// code your solution here
function saturdayFun(activity2='roller-skate'){
    return `This Saturday, I want to ${activity2}!`
    //console.log(`"This Saturday, I want to ${activity1}"`)
}
saturdayFun("roller-skate!");


const mondayWork = function(activity3='go to the office'){
    return `This Monday, I will ${activity3}.`
}

mondayWork("go to the office");


var wrapAdjective = function(style="*") {
    return function(adjective="a hard worker") {
      return `You are ${style}${adjective}${style}!`
    }
  }

  var wrapAdjective = function(style="||") {
    return function(adjective="a dedicated programmer") {
      return `You are ${style}${adjective}${style}!`
    }
  }

