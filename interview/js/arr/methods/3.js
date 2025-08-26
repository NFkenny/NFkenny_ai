const people = [
  {name: 'alice', age: 20, role: 'user'},
  {name: 'mrsk', age: 18, role: 'admin'},
  {name: 'kenny', age: 21, role: 'user'},
]
const allAdults = people.every(person=>person.age >= 18);
const hasAdmin = people.some(person => person.role === 'admin');