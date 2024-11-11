const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (i, j) => {
    // Return if out of bounds or water
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
      return;
    }

    // Mark the current cell as water to avoid revisiting
    grid[i][j] = 'W';

    // Explore the four possible directions
    dfs(i + 1, j); // down
    dfs(i - 1, j); // up
    dfs(i, j + 1); // right
    dfs(i, j - 1); // left
  };

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
