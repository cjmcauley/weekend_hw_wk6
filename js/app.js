document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const playerName = event.target.player.value;
    const playerTeam = event.target.club.value;
    const playerGoals = event.target.goals.value;

    const playerDetails = document.createElement('div');

    const player = document.createElement('h2');
    player.textContent = playerName;
    playerDetails.appendChild(player);

    const club = document.createElement('h3');
    club.textContent = playerTeam;
    playerDetails.appendChild(club);

    const goals = document.createElement('p');
    goals.textContent = playerGoals;
    playerDetails.appendChild(goals);

    topScorers = document.querySelector('#top-scorers');
    topScorers.appendChild(playerDetails);

    form.reset();

  });


});
