import { Request,Response } from "express";
import { Student } from "../entity/Student";
import { getManager } from "typeorm";
import { Course } from "../entity/Course";
import { University } from "../entity/University";


//fetching data from db
const get_student_Records = async (req:Request,res:Response) => {
    
    const entityManager = getManager();

    // Fetch all courses
    const courses = await entityManager.find(Course);

    // Fetch all universities
    const universities = await entityManager.find(University);

    // Fetch all students
    const students = await entityManager.find(Student);


    // Combine the data
    const result = students.map(student => {
        const uni = universities.find(university => university.id === student.uni_id);
        const course = courses.find(courses => courses.id === student.course_id);
        return {
            id: student.id,
            name: student.name,
            universityName: uni ? uni.name : null,
            courseName:course?course.name:null
        };
    });

    res.json({
        data: {result}
    });
}

//save the data in the db

const add_student_Records = async (req:Request,res:Response) => {
    console.log("Request stu", req.body.data.stu)
    console.log("Request uni", req.body.data.uni)
    console.log("Request course", req.body.data.course_data)
    const entityMangager = getManager();

    let student = new Student();
    student.name = req.body.data.stu;
    student.uni_id = req.body.data.uni.value;
    student.course_id= req.body.data.course_data.value
    let data = await entityMangager.save(student)

    res.json({
        test: "OK",
        data: data
    })
}

export{
    get_student_Records,
    add_student_Records
}