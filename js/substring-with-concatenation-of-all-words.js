/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words.length || !s.length) return [];

  const res = [];
  const wordLen = words[0].length;
  const wordCounts = words.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  // for loop
  let left, strCounts, count;

  function reset(start) {
    left = start;
    strCounts = {};
    count = 0;
    return s.length - left + 1 >= wordLen * words.length;
  }

  function moveLeft() {
    const leftStr = s.substr(left, wordLen);
    strCounts[leftStr]--;
    count--;
    left += wordLen;
  }

  for (let i = 0; i < wordLen; i++) {
    const next = reset(i);
    if (!next) break;

    for (let j = i; j <= s.length - wordLen; j += wordLen) {
      const str = s.substr(j, wordLen);

      if (wordCounts[str]) {
        count++;
        strCounts[str] ? strCounts[str]++ : (strCounts[str] = 1);

        while (strCounts[str] > wordCounts[str]) moveLeft();

        if (count === words.length) {
          res.push(left);
          moveLeft();
        }
      } else {
        const next = reset(j + wordLen);
        if (!next) break;
      }
    }
  }
  return res;
};
