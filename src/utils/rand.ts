
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomInts(count: number, max: number): Set<number> {
  const nums: Set<number> = new Set<number>();
  const adjustedCount = Math.min(count, max);
  while (nums.size < adjustedCount) {
    nums.add(getRandomInt(0, max));
  }
  return nums;
}