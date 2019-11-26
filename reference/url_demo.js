const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=1005&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//host(root domain)
console.log(myUrl.host)

//host name (does not get port)
console.log(myUrl.hostname)

//path name
console.log(myUrl.pathname)

//serialized query
console.logs(myUrl.search)

// params object
console.log(myUrl.searchParams)

//add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))