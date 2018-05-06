let sinon = require("sinon");
let main = require("../lib/main");
let studentScore=require("../lib/studentScore.js");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

});
describe('studentScore',()=>{
    let student_info=[{name:'张三',stuno:'001',nation:'han',class:'2',math:75,chinese:95,english:80,programme:80},
     {name:'李四',stuno:'002',nation:'han',class:'2',math:85,chinese:80,english:70,programme:90},
    {name:'lalal',stuno:'003',nation:'han',class:'2',math:75,chinese:95,english:80,programme:80}];
    let stuNo=['001','002','004'];
     it('should display main menu once started', () => {
       let student_str= studentScore(student_info,stuNo);
       expect(student_str).toBe(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
========================
全班总分平均数：327.5
全班总分中位数：327.5`);
});

})
