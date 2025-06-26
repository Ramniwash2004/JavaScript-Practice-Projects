// how to use API....
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1 :",data.fact);
//     return FeatherIcon(url);
// })
// .then((res)=>{
//      return res.json();
// })
// .then((data2)=>{
//     console.log("Data 2 :",data2);
// })
// .catch((Error)=>{
//     console.log("error is :",Error);
// });


//use API with async-await
// let url2="https://catfact.ninja/fact";
// async function getFact(url){
//     try{
//         let res2=await fetch(url2);
//         let data =await res2.json();
//         console.log("Data 2 is :",data.fact);

//         let res3=await FeatherIcon(url2);
//         let data2 =await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("Error is :",e);
//     }

//     console.log("good bye..");
// }

// getFact();


//Axios
// Cat Fact API
let url3="https://catfact.ninja/fact";
async function getFact(){
    try{
        let res3=await axios.get(url3);
        return res3.data.fact;
    }
    catch(e){
        console.log("Error is :",e);
        return "No fact found !";
    }
}

let btn1 = document.getElementById("btn1");
let p=document.querySelector("p");
btn1.addEventListener("click",async ()=>{
    let fact= await getFact();
    p.innerText=fact;
    console.log(fact);
}); 
  

//Dog Image API
let url4="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res4=await axios.get(url4);
        return res4.data.message;
    }
    catch(e){
        console.log("Error is :",e);
        return "No image found!";

    }
}

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click",async ()=>{
    let link= await getImage();
    let image=document.querySelector("#image");
    image.setAttribute("src",link);
   
    console.log(link);
});


//University API
let url5="http://universities.hipolabs.com/search?name=";
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colArr= await getColleges(country);
    show(colArr);
});
function show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res5=await axios.get(url5+country);
        return res5.data;
    }catch(e){
        console.log("error is :",e);
        return [];
    }
}