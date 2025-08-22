// # 红绿灯

// - 同步阻塞
  // sleep 函数
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  (async ()=>{
    console.log("BEGIN");
    // 异步变同步
    await sleep(3000);
    console.log("END");
  })()
// - 显示时间
// - 轮询
