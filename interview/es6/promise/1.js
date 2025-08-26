const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 2000)
})
const p4 = Promise.reject('p4 rejected')
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected timeout')
  }, 3000)
})
Promise.all([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
Promise.allSettled([p1, p2, p3, p4, p5])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  
