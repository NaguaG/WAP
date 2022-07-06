const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        const avg = this.grades.reduce((sum, current, index, array) => sum + current/array.length, 0);
        console.log(`Computing average grade for ${this.firstName} ${this.lastName}: ${avg}`)
    }

}

const stu1 = Object.create(student);
stu1.firstName = 'John' ;
stu1.lastName = 'Smith';
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);

const stu2 = Object.create(student, {grades: {value: []}});
stu2.firstName = 'Mora';
stu2.lastName = 'Kevin';
stu2.inputNewGrade(99);
stu2.inputNewGrade(98);
stu2.inputNewGrade(100);
stu2.inputNewGrade(99);
const students = [stu1, stu2];
const result = student.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);