const dishlistBtn = document.querySelector('#dishlist');
const bingefinderBtn = document.querySelector('#bingefinder');
const spacetravelBtn = document.querySelector('#spacetravel');

const projectImage = document.querySelector('.projectImage');
const projectName = document.querySelector('.projectName');
const projectDesc = document.querySelector('.projectDescription');
const projectLink = document.querySelector('.projectLink');

const projectSkills = document.querySelector('.projectSkills');
const dishlistSkills = ["Android","Java","Back4App(Backend)"];
const bingefinderSkills = ["Javascript","HTML","CSS","3rd Party API"];
const spacetravelSkills = ["Javascript","HTML","CSS","BootStrap"];


const deleteSkills = ()=>{
    while (projectSkills.firstChild) {
        projectSkills.removeChild(projectSkills.lastChild);
    }
}

const addSkills = (skills)=>{
    for(let skill of skills){
        const tech = document.createElement('button');
        tech.textContent = skill;
        tech.classList.add('projectSkill');
        projectSkills.appendChild(tech);
    }
}


dishlistBtn.addEventListener('click',()=>{
    //below code only executes if we aren't currently looking at project for efficiency

    if(!dishlistBtn.classList.contains('activeProject')){
        bingefinderBtn.classList.remove("activeProject");
        spacetravelBtn.classList.remove("activeProject");
        dishlistBtn.classList.add('activeProject');

        projectName.textContent = "DishList";

        //update description of project
        projectDesc.textContent = "DishList is an Android app I collaborated on with 3 other peers." +
        " Essentially, the app is an Instagram clone with a twist, its main focus is on recipes. In "+
        "this app, users can create accounts, post recipes, and view other recipes from different "+
        "users on the platform.";

        //update screenshot of project
        projectImage.src = "dishlist.jpeg";

        //Task: add "buttons" for tech used to build project
        //Step 1: delete current children of parent div
        deleteSkills();

        //Step 2: create buttons and add buttons to projectSkills div
        addSkills(dishlistSkills);

        //update link of project
        projectLink.href = "https://github.com/RecipeTeam123/DishList";

    }
})

bingefinderBtn.addEventListener('click',()=>{
    //below code only executes if we aren't currently looking at project for efficiency
    if(!bingefinderBtn.classList.contains('activeProject')){
        spacetravelBtn.classList.remove("activeProject");
        dishlistBtn.classList.remove('activeProject');
        bingefinderBtn.classList.add("activeProject");
        
        projectName.textContent = "BingeFinder";

        //update description of project
        projectDesc.textContent = "BingeFinder is a web app I built that allows users to search for a show " +
        " and displays the results that is accessed through a 3rd party api. "+
        "The user has the ability to click on a poster for a show which will then take them to another page that " +
        "has details of the show.";

        //update screenshot of project
        projectImage.src = "bingefinder.jpeg";

        //Task: add "buttons" for tech used to build project
        //Step 1: delete current children of parent div
        deleteSkills();

        //Step 2: create buttons and add buttons to projectSkills div
        addSkills(bingefinderSkills);

        //update link of project
        projectLink.href = "https://github.com/zhimed/BingeFinder";

    }})

spacetravelBtn.addEventListener('click',()=>{
    //below code only executes if we aren't currently looking at project for efficiency
    if(!spacetravelBtn.classList.contains('activeProject')){
        bingefinderBtn.classList.remove("activeProject");
        dishlistBtn.classList.remove('activeProject');
        spacetravelBtn.classList.add("activeProject");

        projectName.textContent = "SpaceTravel";

        //update description of project
        projectDesc.textContent = "This is a mock static website I built to practice BootStrap. "+
        "The main purpose of this website was to implement features of BootStrap so "+
        "this website is solely for user interface purposes. As a result some features do not have the expected functionality."

        //update screenshot of project
        projectImage.src = "spacetravel.jpeg";
        
        //Task: add "buttons" for tech used to build project
        //Step 1: delete current children of parent div
        deleteSkills();

        //Step 2: create buttons and add buttons to projectSkills div
        addSkills(spacetravelSkills);

        //update link of project
        projectLink.href = "https://github.com/zhimed/SpaceTravel";

    }
})


// const navSlide = ()=>{
    
// }
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const resumeBtn = document.querySelector('.resume');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = ``;
        }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 + 0.3}s`;

        }
    } )

    if(resumeBtn.style.animation){
        resumeBtn.style.animation = ``;
    }else{
        resumeBtn.style.animation = `navLinksFade 0.5s ease forwards 1s`;

    }
})
// navSlide();


//close navbar if in mobile mode and link has been clicked
navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        if(nav.classList.contains('nav-active')){
            console.log("Wadd")
            nav.classList.toggle('nav-active');

            navLinks.forEach((link,index)=>{
                link.style.animation = ``;
                
            } )

            resumeBtn.style.animation = ``;
        }
    })
})


