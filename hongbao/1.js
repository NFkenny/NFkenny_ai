/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */
function hongbao(total,num){
  const arr = [];
  let restAmount = total;// 剩余金额
  let restNum = num;// 剩余人数
  for(let i = 0;i<num-1;i++){
    const amount = Math.random()*(restAmount/restNum*2).toFixed(2);// 随机金额
    restAmount -= amount;
    restNum--;
    arr.push(amount);
  }
  arr.push(restAmount.toFixed(2));
  // - 公平性
  // 平均值
  // 随机性
  return arr;
}