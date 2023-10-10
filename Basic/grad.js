var score = 100;
var grade = 'D';
if(score>=90) {
    grade = 'A'
} else {
    if(score >= 80 && score <=89) {
        grade ='B'
    }
    else {
        if(score >= 35 && score <= 59) {
            grade = 'D'
        }
        else {
            grade ='f'
        }
    }
}
console.log(grade);
