var request = require('sync-request');
var fs = require('fs');
var json= fs.readFileSync('./fifthQue.json','utf8');
var options = {
    headers: {
        "content-type": 'application/json'
    } ,
    body:json
};
console.log("You are here....");
var res = request('POST', 'https://jsonplaceholder.typicode.com/posts',options);
var output = res.getBody('utf8');
var jsonContent = JSON.parse(output);
console.log(output);
console.log(jsonContent.id);

if (res.statusCode === 200) {
    console.log("Status code Validation success...");
}


if (parseInt(jsonContent.id) == 101) {
    console.log("User ID value is "+jsonContent.userId+" ==> Hence, Validation success...");
} else {
    console.log("User ID Validation failes here...");
}