let projects = $(".projectContainer");
console.log(projects);
for(let i = 0; i < projects.length; i++){
    console.log(projects[i]);
    projects[i].id += "container";
    projects[i].addEventListener('mouseover',hoverEffect);
    projects[i].addEventListener('mouseleave', hoverLeave);
}



function $(x) {return document.querySelectorAll(x);} 




function hoverEffect(e){
    let item = e.target;
    // alert("My id is: "+e.target.id);
    console.log("My id is: "+item.id);

    if(item.id == "container" && item.querySelector(".hiddenName")){
        console.log("is container");
        let projectName = item.querySelector(".hiddenName");
        console.log(projectName);
        projectName.classList.toggle("hiddenName");
        projectName.classList.toggle("projectName");
    }
}

function hoverLeave(e){
    let item = e.target;
    // alert("My id is: "+e.target.id);
    console.log("My id is: "+item.id);
    if(item.id == "container" && item.querySelector(".projectName")){
        console.log("is container");
        let projectName = item.querySelector(".projectName");
        console.log(projectName);
        projectName.classList.toggle("hiddenName");
        projectName.classList.toggle("projectName");
    }
}