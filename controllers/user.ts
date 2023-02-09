import { Request,Response } from "express";
import { University } from "../entity/University";
import { getManager } from "typeorm";


const uniDetail = async (req:Request,res:Response) => {
    
    console.log("Request body",req.body.data)
    const entityMangager = getManager();
    
    //fetching data
    
    let data = await entityMangager.find(University);
    res.json({
        test:"OK",
        data:data       
    })
    
    // Insert
    
    // console.log(req)

    
    // let data = await entityMangager.insert(University,{
    //     name:'demo'
    // })

    //save


    //update

    // let data = await entityMangager.update(University,2,{name:"Ned University"});

    //delete

    // let data = await entityMangager.delete(University,2);

}

//save the data in the db

const addData = async (req:Request,res:Response) => {
    console.log("Request body",req.body.data)
    const entityMangager = getManager();
    
    let uni = new University ();
    uni.name = req.body.data;
    let data = await entityMangager.save(uni)
    res.json(data)

}

export{
    uniDetail,
    addData
}