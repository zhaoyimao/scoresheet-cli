function StudentScore(student_info,stuNo){
    for(let i in student_info){
        console.log(student_info[i]);
    }
    let student_score=getStudentScore(student_info,stuNo);
    let student_str=printStudentScore(student_score);
   return student_str;
}
function getStudentScore(student_info,stuNo){//得到需要打印的学生的信息
    let student=[];
    let stu_all_no=[];
    for(let i in student_info){//获取所有学生的学号
         stu_all_no.push(student_info[i].stuno);
    }
    let stu_no=stuNo.filter(value=>{
        return stu_all_no.includes(value);
    });
    console.log(stu_no);
    if(stu_no.length!=0){
    for(let i in student_info){
        let sum_score=0;
        stu_no.filter((value,index)=>{
           if(value==student_info[i].stuno){
            let student_object={};
               student_object.name=student_info[i].name;
               student_object.math=student_info[i].math;
               student_object.chinese=student_info[i].chinese;
               student_object.english=student_info[i].english;
               student_object.programme=student_info[i].programme;
               student_object.sumScore=student_info[i].math+student_info[i].chinese+student_info[i].english+student_info[i].programme;
               student_object.ave=student_object.sumScore/4;
               return student.push(student_object);
           }
        });
    }
}
    return student;
}
function printStudentScore(student){//打印学生信息
   
    let student_str=`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
`;
let all_student_sum=0;
for(let i in student){
   let str=`${student[i].name}|${student[i].math}|${student[i].chinese}|${student[i].english}|${student[i].programme}|${student[i].ave}|${student[i].sumScore}`;
   student_str=student_str+str+'\n';
   all_student_sum=all_student_sum+student[i].sumScore;
}
let stu_middle_score=0;
if(student.length%2==0){
    stu_middle_score=(student[student.length/2].sumScore+student[(student.length/2)-1].sumScore)/2;
}else{
    stu_middle_score=student[Math.floor(student.length/2)].sumScore;
}
student_str=student_str+`========================
全班总分平均数：${all_student_sum/student.length}
全班总分中位数：${stu_middle_score}`;
return student_str;
}

module.exports=StudentScore;
