// Create a JavaScript object, representing a student.
// Student has: name, surname, age.
// Student has also an array of courses.
// Each course has a name, number of hours and a short description.
var student1 = {
    name: "Popescu",
    surname: "Florin",
    age: 33,
    courses: [{
        name: "SDA1",
        numbers: 10,
        description: "JS course",
    }, {
        name: "SDA2",
        numbers: 5,
        description: "C# course"
    }]
}
//Write a function that will create a sample Course object and fill it with some data.
function Course(nume, ore, descriere) {
    this.name = nume;
    this.numbers = ore;
    this.description = descriere;
}

// Write a function that will create a sample Student object and fill it with some data.
function Student(nume, prenume, varsta, cursuri) {
    this.name = nume;
    this.surname = prenume;
    this.age = varsta;
    this.courses = cursuri;
}
var student2 = new Student("Georgescu", "Alin", 30, []);
// we are using JSON stringify because otherwise the object is passed by reference and 
// updating it (even after the console log) will update in console log, 
// therefore we are not seeing the real value of that object at the time of printing

// inainte de a adauga cursuri
console.log("1: no stringify (student2 is passed by reference)", student2)
console.log("1:", JSON.stringify(student2))
var course1 = new Course("curs1", 2, "cel mai bun curs");
console.log(course1)
var course2 = new Course("curs2", 2, "mate");
student2.courses.push(course1, course2);
console.log("2: no stringify", student2)
console.log("2:", JSON.stringify(student2))

// Write another function that will copy the previously created Student and make a new one.
// Object.assign copied the everything from student2 in an empty object {}
var student3DeepCopy = JSON.parse(JSON.stringify(Object.assign({}, student2)));
//Check if the students is properly copied - including his courses (change in copied student's courses should not affect the original ones)!
console.log("student3DeepCopy", JSON.stringify(student3DeepCopy))
var course3 = new Course("curs3", 2, "romana");
student3DeepCopy.courses.push(course3);
console.log("student3DeepCopy", JSON.stringify(student3DeepCopy))
console.log("student2", JSON.stringify(student2))
// In programming, we store values in variables. 
// Making a copy means that you initiate a new variable with the same value(s). 
// However, there is a big potential pitfall to consider: deep copying vs. shallow copying. 
// A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
// A shallow copy means that certain (sub-)values are still connected to the original variable.
var student4ShallowCopy = Object.assign({}, student2); // shallow copy
student4ShallowCopy.courses.push(course3);
console.log("student4ShallowCopy", JSON.stringify(student4ShallowCopy))
console.log("student2", JSON.stringify(student2))
var student5DeepCopy = JSON.parse(JSON.stringify(student2)); // deep copy
// JSON.parse(JSON.stringify(student2)) = JSON.parse(JSON.stringify(Object.assign({}, student2)))

//changing name of one student, the other one should remain unchanged
student5DeepCopy.name = 'John';
console.log("student5DeepCopy", JSON.stringify(student5DeepCopy))
console.log("student2", JSON.stringify(student2))

//changing name of one student's course, the courses of the other student should remain unchanged
student5DeepCopy.courses[0].name = 'changed course name';
console.log("student5DeepCopy", JSON.stringify(student5DeepCopy))
console.log("student2", JSON.stringify(student2))

student4ShallowCopy.name = "Jimmy"; // this is not reflected bcs shallow copy udpates only the variables by reference (array, object)
var course4 = new Course("curs4", 5, "info");
student4ShallowCopy.courses.push(course4);
console.log("student4ShallowCopy", JSON.stringify(student4ShallowCopy))
console.log("student2", JSON.stringify(student2))