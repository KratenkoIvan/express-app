import tagRepository from "./tagRepository"
import { IError, ISuccess } from '../types/types'
import { Tag } from "./tagTypes"

async function getAllTags(): Promise<ISuccess<Tag[]> | IError> {
    const tags = await tagRepository.getAllTags()

    if (!tags) {
        return {
            status: 'error',
            message: 'No tags found'
        }
    }
    return {status: 'success', data: tags}
}

const tagService = {
    getAllTags: getAllTags,
}

export default tagService;