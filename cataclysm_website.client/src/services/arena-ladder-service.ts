
async function getArenaLadder() {
    const response = await fetch('arena/ladder'); // communicates to controller to connect to backend for arena/ladder data
    return await response.json();
}
const ArenaLadderService = {
  getArenaLadder,
};

export default ArenaLadderService;
