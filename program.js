// Add new functions, variables here

function decToBi(num) {
  let remainder = [];
  let arr =[];
  while (num != 0) {
     remainder = num % 2;
     num = math.floor(num/2);
     arr.push(remainder);
  }
  for (let i =arr;i<arr.length;i++);
  console.log(bin);
}

function binToDec (input){
  let temp = [];
  temp = input.toString().split("");
  let arr = [];
  temp = temp.reverse();
  let kq = 0;
  for (let i=0;i<temp.length;i++){
    if(temp[i] == 1){
      arr += 1 * Math.pow(2,i);
    }
  }
  return kq;
}

function binToHex(n) {
  // n = 101011100
  n = n.toString();
  for(let i = 0;i < n.length;i++){
    if((n.length)%4 !=0){
      n = "0" + n;

    }
  }
  let temp = [];
  for(let i = 0;i < n.length;i+=4){
        temp.push(n.substring(i,i+4))    
  }
  return temp;  
}
function hex(n){
  switch (n){
    case '0000':return '0';
    case '0001':return '1';
    case '0010':return '2';
    case '0011':return '3';
    case '0100':return '4';
    case '0101':return '5';
    case '0110':return '6';
    case '0111':return '7';
    case '1000':return '8';
    case '1001':return '9';
    case '1010':return 'A';
    case '1011':return 'B';
    case '1100':return 'C';
    case '1101':return 'D';
    case '1110':return 'E';
    case '1111':return 'F';   
      default:
        break;
  }
}

console.log(binToDec (111111));

module.exports = main;


