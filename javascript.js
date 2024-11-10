
// let array = [1 , 2 ,3 , 4 ,"hello world "];
//  here we use different ypes of data because it is dynamic in nature
// js -  array index not fount - undefined
  
                                                                 //  nesting of array


// let array= [1 , 2 ,3 , 4 ,"hello world " ,[1,2,3,4]];
// console.log(array[5][0]); 
// - 1 output


                                                                        // object
   
 // data store in key value pair
//  let object = {
// name : "Anamika",age:24,
//  }
//  console.log(object);
//  console.log(object.name);
//  console.log(object.age);


                                                                  // nested object
// let object = {
//     name : "Anamika",age:24,
//     languages: {     // object created
      
//         first:"hindi",
//         second:"english"
//     }
   
//      }
//      console.log(object);
//      console.log(object.lanugages);
//      console.log(object.languages.first);
                                                                 //  object inside array 

                                                                 
//   let array = [4,5,"hello world",{name:"Anamika",age:24}];
//   console.log(array[3].age);      
//   access


// let array = [4,5,"hello world",{name:"Anamika",age:24}];
// let newObj={
//     greet:"hello world",
//     time:10.3,
//     arr : [4,5,"hello world",{name:"Anamika",age:24}]
// }
// console.log(newObj.arr[3].age);
  





// examples
// let arr = [1,2,4,5,'c',"Anamika",[5,6,7,7,{name:"bbdv",age:24}]];
// console.log(arr[6][4].age);



// let obj ={
//     name:"Anamika",
//     age:24,
//     a: [8,9,'e',"hey",["abdhjk",0,6,2309809765]]
// }
// console.log(obj.a[4][3]);
// console.log(obj);
// console.log(obj.name);



// let arr1 = [1,2,3,4];
// let arr2 = [,2,3,4,5,6];
// let arr3 = arr1+arr2;
// console.log(arr3.length);


                                                                         // string

// for ascii value
// let string = "Anamika" ;
// console.log(string.charCodeAt(0));
// console.log(string.slice(2,4));



                                                                    // DOM
                                                //  dynamic changes to html code  with help of dom                 
                                            //   
// const head1 = document.getElementById('head');
//  document.getElementById('head').innerText = "This is my dynamic changes";



                                                        //  const head2 = document.getElementsByClassName('head')[2];
                                                        //  head2.innerText= "This is heading1";



//  jitne v elements ka class same h un svi ko wo array k under store kr dega

// const head = document.querySelector('head');
// head.innerText = "new dynamic heading";


// function k under
                                            //   const head=document.querySelector('.head');
                                            //   const btn=document.getElementById("btn");
                                            //   function changeContent(){
                                            //       head.innerText = "kljehr";
                                            //       head.style.color="red";
    
                                            //   }
                                            //   btn.addEventListener("click",changeContent);




                                                              // function displayName(){
                                                              //     const text = document.getElementById('text').value;
                                                              //     // console.log('field');
                                                              //     const head = document.getElementById('head');
                                                              //     head.innerText= text;
                                                              // }
                                                              // const btn = document.getElementById('btn');
                                                              // btn.addEventListener('click',displayName);




// const box = document.getElementById('box');
// let a = 25;
// box.innerText = `this is ${a} kjdh`;



// random bill generate


