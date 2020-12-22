// Write a function that takes the two teams, cycles through every play in every quarter and return the score and winner at the end of the game

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

//delcare a function gameResult, teams as parameters
function gameResult(team1, team2) {
  //Generate team names with an uppercase letter at index 0
  const team1name = team1.name.charAt(0).toUpperCase() + team1.name.slice(1);
  const team2name = team2.name.charAt(0).toUpperCase() + team2.name.slice(1);

  //set the score of each team equal to the result of the interior function getScore
  const team1Score = getScore(team1);
  const team2Score = getScore(team2);

  //delcare interior function getScore, this prevents DRY(hopefully lol), previously was writing two of everything.
  function getScore(team) {
    //generate a variable that is equal to the object plays
    const playsAll = team("plays"); //team() also works here, I am confused as to why??
    //using concat, merge all quarters into an array
    const allQtr = playsAll.firstQuarter.concat(
      playsAll.secondQuarter,
      playsAll.thirdQuarter,
      playsAll.fourthQuarter
    );
    //set a score variable equal to zero
    let teamScore = 0;

    //using forEach, take each score and convert it into a number with parseInt, add to teamScore.
    //item.play() returns the result of the play function
    allQtr.forEach((item) => {
      teamScore += parseInt(item.play(), 10);
    });
    //return the teamScore
    return teamScore;
  }

  //declare a function to compare scores and return the winning team.
  const winner = (score1, score2) => {
    if (score1 > score2) {
      return team1name;
    } else if (score2 > score1) {
      return team2name;
    } else {
      return "Nobody";
    }
  };

  return `${team1name}: ${team1Score}, ${team2name}: ${team2Score}... ${winner(
    team1Score,
    team2Score
  ).toUpperCase()} WIN!`;
}

//Uncomment for test
//console.log(gameResult(blazers, lakers)); // returns the string => "Lakers: 15, Blazers: 12...LAKERS WIN!"
