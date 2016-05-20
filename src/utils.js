export function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
      [{
        name: 'Task 2',
        author: 'Charles',
        completed: false,
      },{
        name: 'Task 3',
        author: 'Ulysse',
        completed: false,
      }],
      {
        visibility: true
      })
    }, 1000);
  })
}
