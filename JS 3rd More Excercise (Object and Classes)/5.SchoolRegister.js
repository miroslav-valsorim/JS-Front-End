function studentsRegister(array){
    objOfStudents = {}

    for (let item of array){
        let [one, two, three] = item.split(', ')
        let name = (one.split(': '))[1]
        let grade = Number(two.split(': '))[1]
        let score = Number(three.split(': ')[1])

        if (score >= 3.00){
            if (!objOfStudents.hasOwnProperty(grade)){
                objOfStudents[grade] = {students : [], score: []}
            }
            objOfStudents[grade].students.push(name)
            objOfStudents[grade].score.push(score)
        }
    }

    const sortedData = Object.entries(objOfStudents).sort((a, b) => a - b);

    for (let obj of sortedData) {           
        let avgScore = obj[1].score.reduce((a, b) => {
            return a += b
        }, 0)
    
        console.log(`${Number(obj[0]) + 1} Grade`),
        console.log(`List of students: ${obj[1].students.join(', ')}`)
        console.log(`Average annual score from last year: ${(avgScore / obj[1].score.length).toFixed(2)}\n`);
    }
}

studentsRegister(
    ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
)