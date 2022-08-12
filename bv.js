//Find_Sum

const Find_Sum = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc+curr);
return result;
};

//Find_Prod

const Find_Prod = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc*curr,1);
return result;
};

// Inc_Arr 

const Inc_Arr = (array,N) => 
{
  
 array=array.map(item => item+1);
 let a=array.join(' ');
 console.log(a)

};

//findCount

const findCount = (N, K, Arr) => 
{
   let count=0;
    for(let i=0 ; i<N ; i++ ){
      if(Arr[i] === K){
         count+=1;
          } 
             }
              return count;  
};
 
const Find_Num = (array,N,M) => 
{
 
  if(array.includes(M)){
    return "YES"
  } 
  else{
  return "NO"
  }
};

 // all pass
const isAllPass = (N, Arr) => 
{
     for(let i=0;i<N;i++){
    if(Arr[i]<32){
      
    return "NO";
   }
      
  }
    return "YES";
};

 // array min 
function arrayMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }
    
    return min;
  
  }
  
  // array max
  function arrayMax(arr) {
  
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
     
  
  }
// high age

  const highAge = (N, Arr) => 
{
  let age=[];
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      age.push(Arr[i]);
    }
    
  }
  return age;
};

// birthday game
function Birthday_Game(arr,D ,M) {
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;

}


