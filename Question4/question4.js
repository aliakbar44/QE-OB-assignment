var request = require('sync-request');
var options = {};
var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1', options);
var output = res.getBody('utf8');
var jsonContent = JSON.parse(output);
console.log(output);

console.log(jsonContent);
console.log(jsonContent.userId);

if (jsonContent.userId==1) {
    console.log("User ID value is "+jsonContent.userId+" ==> Hence, Validation success...");
} else {
    console.log("User ID Validation failes here...");
}

if (res.statusCode === 200) {
    console.log("Status code is "+res.statusCode+ " ==> Hence, Status code Validation success...");
}
