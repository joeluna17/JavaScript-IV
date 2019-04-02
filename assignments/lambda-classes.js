// CODE here for your Lambda Classes
// Start Person Class
class Person {
    constructor(name, age, location, gender){
        this.name = name
        this.age = age
        this.location = location
        this. gender = gender
    }
    speak(){
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}.`)
    }
}
// End Person Class


// Start Instructor Class

class Instructor extends Person{

    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase){
        super(name, age, location, gender)
        this.specialty = specialty
        this.favLanguage = favLanguage
        this.catchPhrase = catchPhrase
        }
        demo(subject){
            console.log(`Today we are going to learn about ${subject}`)
        }

        grade(student, subject){
            console.log(`${student.name} recieves a perfect score on ${subject}`)
        }

}

// End Instructor Class

// Start Student Class

class Student extends Person{
       
    constructor(name, age, location, gender, previousBackground, className, favSubjects){
        super(name, age, location, gender)
        this.previousBackground = previousBackground
        this.className = className
        this.favSubjects = favSubjects
    }

    listSubjects(){
            console.log(`${this.name}s' favorite subjects are:\n`)
        this.favSubjects.forEach(subject => {
            console.log(`${subject}\n`)
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallange(subject){
        console.log(`${this.name} has begun sprint challange on ${subject}.`)
    }

}

// End Student Class

//Begin Project Manager

class ProjectManager extends Instructor{

    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase,  gradClassName, favInstructor){
        super(name, age, location, gender, specialty, favLanguage, catchPhrase)
        this.gradClassName = gradClassName
        this.favInstructor = favInstructor
    }

    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel stand up time!​​​​​`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}


// Begin Object Instance

const jerryStudent = new Student("Jerry Hinsefield", 21, "Seattle", "male", "Front End Web", "Web5",["Compuer Science", "Django", "CSS", "HTML"])
jerryStudent.listSubjects()
jerryStudent.PRAssignment("React")
jerryStudent.sprintChallange("JavaScript")


const maryStudent = new Student("Marry Hull", 33, "Vermont", "female", "None", "WebPT5", ["CSS", "HTML", "Bootstrap"])
console.log(maryStudent.name, maryStudent.location, maryStudent.className)
maryStudent.speak()
maryStudent.listSubjects()


///////Instructor Instance Object

const johnInstructor = new Instructor("John Hernandez", 27, "San Diego", "male", "React Native", "Swift", "Anything you can do I can do slower and safer!" )
johnInstructor.speak()
console.log(johnInstructor.catchPhrase)
johnInstructor.demo("JavaScript")
johnInstructor.grade(jerryStudent, "Preprocessing")


const samInstructor = new Instructor("Samantha Gains", 37, "New York", "female", "C#", "C++", "Live, Love, Laugh, just be basic!" )
samInstructor.speak()
console.log(samInstructor.favLanguage)
samInstructor.grade(maryStudent, maryStudent.favSubjects[1])
samInstructor.demo("Python")

// Project Manager Instance Object 

const tyronePM = new ProjectManager("Tyrone Willson", 26, "Arizona", "male", "JavaScript", "JavaScript", "Get it done!", "CS132", samInstructor.name )
tyronePM.speak()
tyronePM.standUp("WebPT5")
tyronePM.debugsCode(jerryStudent, "Symantic HTML")
console.log(tyronePM.favInstructor)

const shaylaPM = new ProjectManager("Shayla Smith", 42, "Michigan", "female", "Fortran", "Ruby", "It's not the destination, but the food you eat along the journey!", "IOS33", "Cherry Dunst" )
shaylaPM.speak()
shaylaPM.standUp("Web8")
shaylaPM.debugsCode(jerryStudent, "CSS")
console.log(shaylaPM.favInstructor)
