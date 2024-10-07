let footballTeam = {
    teamName: "ucu play boys",
    players: [
      { name: "emma okello", position: "Forward", goalsScored: 10 },
      { name: "otto man", position: "Midfielder", goalsScored: 5 },
      { name: "riak james", position: "Defender", goalsScored: 2 },
      { name: "charles bigplay", position: "Forward", goalsScored: 7 }
    ],
  
    // Method to calculate total goals scored by all players
    calculateTotalGoals: function() {
      let totalGoals = 0;
      for (let i = 0; i < this.players.length; i++) {
        totalGoals += this.players[i].goalsScored;
      }
      return totalGoals;
    }
  };
  
  // Log the total goals scored by the team
  console.log(`Total goals scored by ${footballTeam.teamName}: ${footballTeam.calculateTotalGoals()}`);
  