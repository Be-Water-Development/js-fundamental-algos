// Write a function that takes the two teams, cycles through every play 
// in every quarter and return the score and winner at the end of the game

// structure of lakers () and blazers ()
// plays is an object of arrays, each object has arrays within
// takes two callback functions that give access to the objects
// do we always assume that the objects given will have the function play()?
// We can safely assume that each play will be 4 points or less

const gameResult = (cb1, cb2) => {
  // declare two constants to keep track of the total score
  let teamOneTotal = 0;
  let teamTwoTotal = 0;
  const teamOneObj = cb1()
  const teamTwoObj = cb2()
  const teamOneName = cb1.name.charAt(0).toUpperCase() + cb1.name.slice(1)
  const teamTwoName = cb2.name.charAt(0).toUpperCase() + cb2.name.slice(1)
  // how to isolate the points as numbers
  // console.log(Number(cb1().firstQuarter[0].play()[0]))
  // go through the first team's objects values
  for (const property in teamOneObj) {
    teamOneObj[property].forEach((el) => {
      // ensure you're getting through the quarters/shooters
      // console.log("property", property, "shooter", el.shooter)
      teamOneTotal += Number(el.play()[0])
    })
  }
  // go through the second team's objects values
  for (const property in teamTwoObj) {
      teamTwoObj[property].forEach((el) => {
        // ensure you're getting through the quarters/shooters
        // console.log("property", property, "shooter", el.shooter)
        teamTwoTotal += Number(el.play()[0])
    })  
  }
  if (teamOneTotal > teamTwoTotal) {
    return `${teamOneName}: ${teamOneTotal}, ${teamTwoName}: ${teamTwoTotal}...${teamOneName.toUpperCase()} WIN!`
  } else if (teamTwoTotal > teamOneTotal) {
    return `${teamTwoName}: ${teamTwoTotal}, ${teamOneName}: ${teamOneTotal}...${teamTwoName.toUpperCase()} WIN!`
  } else {
    return "It was a tie game today folks... but that doesn't happen in the NBA."
  }
}

const lakers = () => {
  const plays = {
    firstQuarter: [
      { shooter: "Lebron", play: () => "2pts" },
      { shooter: "Anthony Davis", play: () => "2pts" },
    ],
    secondQuarter: [
      { shooter: "Lebron", play: () => "3pts" },
      { shooter: "Anthony Davis", play: () => "2pts" },
    ],
    thirdQuarter: [
      { shooter: "Lebron", play: () => "1pts" },
      { shooter: "Anthony Davis", play: () => "2pts" },
    ],
    fourthQuarter: [
      { shooter: "Lebron", play: () => "2pts" },
      { shooter: "Anthony Davis", play: () => "1pts" },
    ],
  };
  return plays;
};

const blazers = () => {
  const plays = {
    firstQuarter: [
      { shooter: "Dame", play: () => "2pts" },
      { shooter: "Cj", play: () => "1pts" },
    ],
    secondQuarter: [
      { shooter: "Dame", play: () => "4pts" },
      { shooter: "Cj", play: () => "2pts" },
    ],
    thirdQuarter: [
      { shooter: "Dame", play: () => "1pts" },
      { shooter: "Cj", play: () => "0pts" },
    ],
    fourthQuarter: [
      { shooter: "Dame", play: () => "1pts" },
      { shooter: "Cj", play: () => "1pts" },
    ],
  };
  return plays;
};

console.log(gameResult(blazers, lakers)); // returns the string => "Lakers: 15, Blazers: 12...LAKERS WIN!"
