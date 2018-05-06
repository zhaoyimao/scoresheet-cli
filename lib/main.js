let StudentScore=require('./studentScore.js');
let student_info_score=[];

function main() {
   let answer=menu();
   if(answer=='1'){
      let student_info_object= addStudent();
      student_info_score.push(student_info_object);
      main();
   }else if(answer=='2'){
       let stuNo=getStudentNo();
      let studentscore= StudentScore(student_info_score,stuNo);
      console.log(studentscore);
       main();
   }else if(answer=='3'){
       return 0;
   }
}
function menu(){//主菜单
    console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    let query=require('cli-interact').getChar;
    let answer=query('请输入你的选择（1～3）：','123');
    return answer;
}

function addStudent(){//添加学生
   let student_info={};
    let query=require('cli-interact').question;
    let answer=query('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    let student_info_array=answer.split(',');
    if(student_info_array.length===8 && student_info_array[1].length==3){
        student_info.name=student_info_array[0];
        student_info.stuno=student_info_array[1];
        student_info.nation=student_info_array[2];
        student_info.class=student_info_array[3];
        student_info.math=Number(student_info_array[4]);
        student_info.chinese=Number(student_info_array[5]);
        student_info.english=Number(student_info_array[6]);
        student_info.programme=Number(student_info_array[7]);
       console.log(`学生的成绩被添加`);
    }else{
       student_info= addStudent_if_err();
    }
    return student_info;
}

function addStudent_if_err(){//添加学生格式错误
    let student_info={};
    let query=require('cli-interact').question;
    let answer=query('请按正确的格式输入(格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：');
    let student_info_array=answer.split(',');
    if(student_info_array.length===8 && student_info_array[1].length==3){
        student_info.name=student_info_array[0];
        student_info.stuno=student_info_array[1];
        student_info.nation=student_info_array[2];
        student_info.class=student_info_array[3];
        student_info.math=Number(student_info_array[4]);
        student_info.chinese=Number(student_info_array[5]);
        student_info.english=Number(student_info_array[6]);
        student_info.programme=Number(student_info_array[7]);
        console.log(`学生的成绩被添加`);
    }else{
       student_info= addStudent_if_err();
    }
    return student_info;
}
function getStudentNo(){//输入学生学号
    let studentNo=[];
    let query=require('cli-interact').question;
    let answer=query('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    studentNo=answer.split(",");
    for(let i in studentNo){
        if(studentNo[i].length!=3){
            studentNo=getStudentNo_arr(); 
        }
    }
    return studentNo;
}
function getStudentNo_arr(){//学号错误
    let studentNo=[];
    let query=require('cli-interact').question;
    let answer=query('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    studentNo=answer.split(",");
    for(let i in studentNo){
        if(studentNo[i].length!=3){
            getStudentNo_arr();
        }
    }
    return studentNo;
}

module.exports=main;