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