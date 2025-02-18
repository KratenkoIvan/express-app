import { Request, Response } from "express";
import postService from "./postService";


async function getAllPosts(req: Request, res:Response){
    const result = await postService.getAllPosts()
    res.json(result)
}


async function getOnePostWithComments(req: Request, res:Response) {
    const id = req.params.id
    const result = await postService.getOnePostWithComments(+id)
    res.json(result)
}



const postControllerApi ={
    getAllPosts: getAllPosts,
    getOnePostWithComments: getOnePostWithComments,
}

export default postControllerApi