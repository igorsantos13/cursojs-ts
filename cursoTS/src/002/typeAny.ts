//should NOT be used often
function sendMessage(msg: any) {
  return msg;
}
//see? TS is mad at you, do not use any, unless... you need it.

console.log(sendMessage(123));
