function rawr(){
    let type = document.getElementById("type").value;
    let title = document.getElementById("title").value;
    if(type=="null" || title==""){
        alert("Please fill out all fields")
    }else{
        alert("You have successfully submitted your event!");
    } 
}