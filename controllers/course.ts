import { Request, Response } from "express";
import { Course } from "../entity/Course";
import { getManager } from "typeorm";
import { University } from "../entity/University";




//fetching data from db
const get_course_detail = async (req: Request, res: Response) => {
    const entityManager = getManager();

    // Fetch all courses
    const courses = await entityManager.find(Course);

    // Fetch all universities
    const universities = await entityManager.find(University);

    // Combine the data
    const result = courses.map(course => {
        const uni = universities.find(university => university.id === course.uni_id);
        return {
            id: course.id,
            name: course.name,
            universityName: uni ? uni.name : null
        };
    });

    res.json({
        data: result
    });

};

//save the data in the db

const addcourse_Data = async (req: Request, res: Response) => {
    console.log("Request body", req.body.data.course)
    console.log("Request body", req.body.data.uni)
    const entityMangager = getManager();

    let course = new Course();
    course.name = req.body.data.course;
    course.uni_id = req.body.data.uni;
    let data = await entityMangager.save(course)

    res.json({
        test: "OK",
        data: data
    })
}

export {
    get_course_detail,
    addcourse_Data
}