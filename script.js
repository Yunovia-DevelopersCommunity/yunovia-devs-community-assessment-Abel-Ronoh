function solution(S) {
  let blocks = []
  for (let i = 0; i < S.length; i++) {
    if (blocks.length && blocks[blocks.length - 1][0] === S[i]) {
      blocks[blocks.length - 1][1]++
    } else {
      blocks.push([S[i], 1])
    }
  }

  let n = blocks.length
  let maxLen = 0

  for (let i = 0; i < n; i++) {
    let merged = [[blocks[i][0], blocks[i][1]]]
    let sum = blocks[i][1]
    maxLen = Math.max(maxLen, sum)

    for (let j = i + 1; j < n; j++) {
      let [ch, len] = blocks[j]
      if (merged[merged.length - 1][0] === ch) {
        merged[merged.length - 1][1] += len
      } else {
        merged.push([ch, len])
      }
      sum += len
      if (merged.length > 3) break
      maxLen = Math.max(maxLen, sum)
    }
  }

  return maxLen
}

console.log(solution("aabacbba"))
console.log(solution("aabxbaba"))
console.log(solution("xxxyxxyyyxyyy"))
console.log(solution("atheaxbtheb"))
