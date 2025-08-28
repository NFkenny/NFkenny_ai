const intervals = [[1,3],[8,10],[2,6],[15,18]];
function merge(intervals) {
  intervals.sort((a,b) => a[0]-b[0])
  const ans = [];
  for(const p of intervals) {
    const m = ans.length;
    if( m && p[0]<= ans[m-1][1]) {
      ans[m-1][1] = Math.max(ans[m-1][1], p[1]);
    } else ans.push(p)
  }
  return ans;
}
const result = merge(intervals);
console.log(result);
