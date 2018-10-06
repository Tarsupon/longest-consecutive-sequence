module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) {
    return 0;
}

array.sort(function(a, b){
  return a - b;
})

let longest = 1;
let current = 1;

for (let i = 1; i < array.length; i++) {
    if (array[i] != array[i-1]) {
        if (array[i] == array[i-1]+1) {
            current++;
        }
        else {
            longest = Math.max(longest, current);
            current = 1;
        }
    }
}

return Math.max(longest, current);
}
  // set = {};
  // let longest = 0;
  // let curr = 0;
  // for(let num = 0; num < array.length; num++){
  //   set[num] = true;
  // }
  // for(num in set){
  //   if(set[num - 1]){
  //     curr = num;
  //     var count = 1;
  //     while(set[curr + 1]){
  //       count++;
  //       curr++;
  //     }
  //     longest = Math.max(longest, count);
  //   }
  // }
  // return longest;

