// Для массива, состоящего из n целых чисел, найдите непрерывный подмассив заданной длины k, который имеет максимальное среднее значение. Нужно вывести максимальное среднее значение.

// Аргументы: [1, 12, -5, -6, 50, 3], k = 4
// Ответ: 12.75
// Объяснение: Максимальное среднее — это (12 - 5 - 6 + 50) / 4 = 5

function findMaxAverage(nums, k) {
   let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let result = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i-k] // Add next, remove previous
    res = Math.max(res, sum)
  }

  return result/k;
}

console.assert(findMaxAverage([1, 12, -5, -6, 50, 3], 4) === 12.75)
