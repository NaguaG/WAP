//Creating constuctor function for Student

function Student(fname, lname, grades = []){
    this.firstname = fname;
    this.lastname = lname;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function(){
    const avg = this.grades.reduce((a, b, index, array) => a + b/array.length, 0);
    console.log(`Computing Average grade for ${this.firstname} ${this.lastname}: ${avg}`);
    return avg;
}

//Creating Instances of Student and calculating grade average

const stu1 = new Student('Sunne', 'Daniel')
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);

const stu2 = new Student('Jessica', 'Bold');
stu2.inputNewGrade(99);
stu2.inputNewGrade(98);
stu2.inputNewGrade(100);
stu2.inputNewGrade(99);

const studentArray = [st1, st2];
console.log(`Overall grade is: ${studentArray.reduce((a, b, index, array) => a + b.computeAverageGrade()/array.length, 0)}`)