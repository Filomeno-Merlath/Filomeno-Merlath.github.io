window.onload = async function(){
    loadNames();
}

async function loadNames(){
    try {
        let data = await $.ajax({
            url:`/api/peoples`,
            method:`get`,
            dataType:"json"
        });
        for(let dat of data){

        let objectElement = document.createElement("option");
        objectElement.value = dat.people_id;
        objectElement.innerHTML = dat.people_name;
        document.getElementById("name").appendChild(objectElement);}
    } catch (error) {
        console.log(error)
    }
}

async function getOccult(){
    var rndInt;
    try {
        let peoples = await $.ajax({
            url:`/api/peoples`,
            method:`get`,
            dataType:"json"
        });
        let alreadys = await $.ajax({
            url:`/api/already`,
            method:`get`,
            dataType:"json"
        });
        console.log(alreadys)
   if(alreadys.length==14){
    document.getElementById("result").innerHTML=`<h1>Sorteio terminado!</h1>`;
   }else{
    if(alreadys.length==0){
    rndInt = randomIntFromInterval(1, 14);
    insertAlready(rndInt);
    console.log(rndInt)
   }else{
    rndInt = 1;
    let i=0;
    rndInt = randomIntFromInterval(1, 14);
     while(i<alreadys.length){
         if(alreadys[i].people_fk_id==rndInt){
         console.log(alreadys[i].people_fk_id==rndInt);
         rndInt = randomIntFromInterval(1, 14);
         i=0;
         console.log
        }else{
            i++;
        }
     }
     console.log(rndInt);
     insertAlready(rndInt);}}
     for(let people of peoples){
         if(people.people_id==rndInt)
         document.getElementById("result").innerHTML=`<h4>Seu Amigo oculto é:</h4><br><h1>${people.people_name}</h1>`;
     }   
    } catch (error) {
        console.log(error)
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function insertAlready(id){
    try {
        let data={
            ID1: document.getElementById("name").value,
            ID:id
        }

        let result= await $.ajax({
            url:`/api/already`,
            method:"post",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"});
            console.log(result);
    } catch (error) {
        console.log(error);
        return;
    }

}