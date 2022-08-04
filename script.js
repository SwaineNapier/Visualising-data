let fname = document.getElementById("name")
let personalPic= document.getElementById("personal_pic")
let email = document.getElementById("email")
let DateOfBirth= document.getElementById("dob")
let Address=document.getElementById("address")
let Phone=document.getElementById("number")
let code= document.getElementById("pw")

fname.innerHTML = data[0].name.first
personalPic.src= data[0].picture.large
email.innerHTML= data[0].email 
DateOfBirth.innerHTML= data[0].dob.date
Address.innerHTML=data[0].location.city
Phone.innerHTML=data[0].phone
code.innerHTML=data[0].login.password

let ImportantInfo= document.querySelectorAll("#personal_info div")
for(let i=0;i<ImportantInfo.length;i++){
    let stat = ImportantInfo[i].id;
    let scale= (data[0].base[stat]/100)*400
    ImportantInfo[i].style["width"]=scale+"px"
}

let randomButton = document.querySelector("#random_btn")
randomButton.onclick= function(event){
    event.preventDefault();
    let randomIndex =Math.floor(Math.random()*data.length)

fname.innerHTML = data[randomIndex].name.first
personalPic.src= data[randomIndex].picture.large
email.innerHTML= data[randomIndex].email 
DateOfBirth.innerHTML= data[randomIndex].dob.date
Address.innerHTML=data[randomIndex].location.city
Phone.innerHTML=data[randomIndex].phone
code.innerHTML=data[randomIndex].login.password
for(let i =0; i<ImportantInfo.length;i++){
    let stat = ImportantInfo[i].id;
    let scale=(data[randomIndex.base[stat]/100])
    ImportantInfo[i].style["width"]=scale+"px";
    console.log(i)
}
}