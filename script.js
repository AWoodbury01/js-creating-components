const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]



// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
//     } else {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")    
//     }
// }


// function printStudent(studentName, subject, info, score){
//     document.querySelector(".studentContainer").innerHTML += `
//     <div class="student">
//         <h1>${studentName}</h1>
//         <section>${subject}</section>
//         <aside>${info}</aside>
//         <article>${score}</article>
//     </div>`
// }


// const createStudentComponent = (name, subject, info, headingClassName) => {
//     return `
//         <div class="student">
//             <h1 class="${headingClassName}">${name}</h1>
//             <section>${subject}</section>
//             <aside>${info}</aside>
//             <article>${score}</article>
//         </div>`;
//     }




//Working code for part 1 | Hard code HTML
// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = 
//         `<div class="student">
//             <h1 class="xx-large passing">${students[i].name}</h1>
//             <section class="bordered dashed section--padded">${students[i].subject}</section>
//             <aside class="pushRight">${students[i].info}</aside>
//         </div>`
//     } else { 
//         studentComponent = 
//         `<div class="student">
//             <h1 class="xx-large failing">${students[i].name}</h1>
//             <section class="bordered dashed section--padded">${students[i].subject}</section>
//             <aside class="pushRight">${students[i].info}</aside>
//         </div>`
//     }
//     document.querySelector("#container").innerHTML += studentComponent;
// }


const createStudentComponent = (name, subject, info, headingClassName) => {
    return `
    <div class="student">
        <h1 class="xx-large ${headingClassName}">${name}</h1>
        <section class="bordered dashed section--padded">${subject}</section>
        <aside class="pushRight">${info}</aside>
    </div>`
}

for (let i = 0; i < students.length; i++) {
    let studentComponent = "";
    if (students[i].score >= 60) {
        studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
    } else { 
        studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")
    }
    document.querySelector("#container").innerHTML += studentComponent;
}

//Part 2
// Barry's Code - goes into the HTML file 

// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class= "pushRight">${info}</aside>
//         </div>
//     `
// }
// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i].name, students[i].subject, students[i].info)
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  
// }

// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class= "pushRight">${info}</aside>
//         </div>
//     `
// }
// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i].name, students[i].subject, students[i].info)
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  
// }


