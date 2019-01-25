// CODE here for your Lambda Classes




// Base class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}




// Instructor class

class Instructor extends Person {
    constructor(att) {
        super(att);
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about ${subject}.`
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    } 
}




// Student class

class Student extends Person {
    constructor(att) {
        super(att);
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }

    listsSubjects () {
        return `${this.favSubjects}`
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}


// Project Manager

class ProjectManager extends Instructor {
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }

    standUp (channel) {
       return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode (student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


// Instructors 

const fred = new Instructor ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'Male',
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

const scooby = new Instructor ({
    name: 'Scooby',
    location: 'Africa',
    age: 65,
    gender: 'Female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Scooby dooby doooo!`
})



// Students

const reyaad = new Student ({
    name: 'Reyaad',
    location: 'Leesburg',
    age: 24,
    gender: 'Male',
    previousBackground: 'Biology',
    className: 'BS101',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const shaggy = new Student ({
    name: 'Shaggy',
    location: 'Antartica',
    age: 89,
    gender: 'Male',
    previousBackground: 'Ghostology',
    className: 'GH101',
    favSubjects: ['Ghosts for Beginners', 'Scooby Snacks', `How To Treat Dogs`]
})



// Project Managers

const joe = new ProjectManager ({
    name: 'Joe',
    location: 'Cali',
    age: 28,
    gender: 'Male',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Give me that 50k or more paying job!`,
    gradClassName: 'CS1',
    favInstructor: 'Cameron Pope'
})

const zombie = new ProjectManager ({
    name: 'Zombie',
    location: 'Graveyard',
    age: 198,
    gender: 'Male',
    favLanguage: 'Gyarhhh',
    specialty: 'Eating Flesh',
    catchPhrase: `Gyarrrrhhhhhhhh!!`,
    gradClassName: 'ZombiesRCool',
    favInstructor: 'Mr.Ghoul'
})


// Instructor
console.log(fred);
console.log(fred.demo('Math'));
console.log(fred.grade(reyaad, 'Calc'));
console.log(scooby.catchPhrase);
console.log(scooby.favLanguage);
console.log(scooby.specialty);

// Student
console.log(reyaad);
console.log(reyaad.listsSubjects());
console.log(reyaad.sprintChallenge('JavaScript'));
console.log(shaggy.age);
console.log(shaggy.gender);
console.log(shaggy.className);
console.log(shaggy.location);
console.log(shaggy.favSubjects);


// Project Manager
console.log(joe);
console.log(joe.standUp('webpt4'));
console.log(joe.debugsCode(reyaad, 'React'));
console.log(zombie.catchPhrase);
console.log(zombie.gradClassName);
console.log(zombie.favInstructor);