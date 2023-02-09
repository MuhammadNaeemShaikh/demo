import express  from "express";
import {uniDetail,addData} from '../controllers/user';
import {get_course_detail,addcourse_Data} from '../controllers/course';
import {add_student_Records,get_student_Records} from '../controllers/student'

const router = express.Router();

router.get('/uni',uniDetail);
router.post('/add_Data',addData);


router.post('/add_course_data',addcourse_Data);
router.get('/get_course_detail',get_course_detail);


router.post('/add_student_Records',add_student_Records);
router.get('/get_student_Records',get_student_Records);

export{
    router
}