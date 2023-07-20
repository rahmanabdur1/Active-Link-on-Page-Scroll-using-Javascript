// Duplicate Arry
let arry =[1,2,3,4,5,6,];
let duplicateArry=arry.slice();
console.log(duplicateArry,"arry")

//use concat()

let arrys =[1,3,4,5,6,7];
let duplicateArrys=[].concat(arrys);
console.log(duplicateArrys,'concat')

  //spread operator

  let arr =[1,4,54,65,];
  let duplicateArr=[...arr];
 console.log(duplicateArr,'spread')

  //json.parse stringify

  let arryDup=[1,3,4,45,6];
  let duplicateAr=JSON.parse(JSON.stringify(arryDup))
console.log(duplicateAr,'arry')

//ind duplicates in an array using javaScript
toFind();
function toFind(element, index){
  let arry=[1,2,3,4,5,6,7,8,2,3,4,1];
  let resultToRetur=false;
  for(let i=0; i<arry.length; i++){
    for(let j=0; j<arry.length; j++){
      if(i !==j){
        if(arry[i] === arry[j]){
          resultToRetur=true;
          break;
        }
      }
    }
    if(resultToRetur){
      break;
    }
  }
  if(resultToRetur){
    console.log('duplicate')
  }
  else{
console.log('not find')
  }
};

//Using an object & key-value pairs
toFindArry();
function tofind(){
  let arry =[1,23,3,4,67,89];
  let toMap ={};
  let resultToRetur=false;
  for (let i =0; i<arry.length; i++){
    if(toMap[arry[i]]){
      resultToRetur =true;
      break;
    }
    toMap[arry[i]]=true
  }
  if(resultToRetur){
    console.log('duplicate')
  }
  else{
    console.log('not duplicate')
  }
}

//find duplicate arry

const ay = [1, 2, 1, 3, 4,2, 3, 5];
const dup=ay.filter((e,i)=>ay.indexOf(e) !==i)
console.log(dup,'dipli...');

// find not dupli...
const notDupliArry = [1, 2, 1, 3, 4, 3, 5];
const unicArry =[...new Set(notDupliArry)];
console.log(unicArry, 'not dupli')