let exec = require('child_process').exec;

let RE_IPV4 = /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/;

function exeTraceRoute() {
  let stack = [];
  let counter = 1;
  //execute child process - traceroute command
  exec('tracert google.co.il', (error, stdout, stderr) => {
    if (error) {
      console.log('Erorr message form execute traceroute: ' + err);
      return;
    }

    console.log(stdout); // print the child process result
    data = stdout.split(/\r?\n/g); // split by REX, the result is array that containe strings

    /*   data.forEach((item) => {
      console.log('this is item:\n');
      console.log(item);
    });*/

    /*
    loop the value in the data, each Iterator make the flow steps:
    - trim : delete space at start and end string 
    - split: split the string by " " (space), the result is array that contine strings
    - filter: filter by REX that represent ipv4 pattern
    - push the result to stack, every index in the stack hold object
    */

    data.forEach((item) => {
      let arr;
      arr = item
        .trim()
        .split(' ')
        .filter((data) => {
          return data.match(RE_IPV4);
        });

      if (typeof arr !== 'undefined' && arr.length > 0) {
        stack.push({ index: counter, ip: arr.pop() });
        counter++;
      }
    });

    //print the stack value
    console.log('stack value: ');
    stack.forEach((data) => {
      console.log(data);
    });
  });

  return stack;
}

module.exports = exeTraceRoute;
