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

gameResult(blazers, lakers); // returns the string => "Lakers: 15, Blazers: 12...LAKERS WIN!"
