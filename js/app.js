document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const playerName = event.target.player.value;
    const playerTeam = event.target.club.value;
    const playerGoals = event.target.goals.value;

    const playerDetails = document.createElement('div');
    playerDetails.setAttribute('id', `${playerTeam.replace(/\s+/g, '').toLowerCase()}`);

    const player = document.createElement('h2');
    player.textContent = `Name: ${playerName}`;
    player.classList.add(`${playerTeam.replace(/\s+/g, '').toLowerCase()}`);
    playerDetails.appendChild(player);

    const club = document.createElement('h2');
    club.textContent = `Club: ${playerTeam}`;
    club.classList.add(`${playerTeam.replace(/\s+/g, '').toLowerCase()}`);
    playerDetails.appendChild(club);

    const goals = document.createElement('h2');
    goals.textContent = `Goals: ${playerGoals}`;
    goals.classList.add(`${playerTeam.replace(/\s+/g, '').toLowerCase()}`);
    playerDetails.appendChild(goals);

    topScorers = document.querySelector('#top-scorers');
    topScorers.appendChild(playerDetails);

    form.reset();

  });


});
