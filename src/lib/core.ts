export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * max) - min;
}

export function range(start: number, end: number) {
  return Array.from({ length: end - start }).map((_, i) => i + 1);
}

export function doubleColorsBalls() {
  let redBalls = [];
  let blueBall;
  let redCandidates = range(1, 34);
  let blueCandidates = range(1, 17);

  for (let i = 0; i < 6; i++) {
    let index = randomInt(0, redCandidates.length);
    redBalls.push(redCandidates[index]);
    redCandidates = [
      ...redCandidates.slice(0, index),
      ...redCandidates.slice(index + 1, redCandidates.length),
    ];
  }

  redBalls = redBalls.sort((x, y) => x - y);
  blueBall = blueCandidates[randomInt(0, blueCandidates.length)];

  return {
    redBalls,
    blueBall,
  };
}
