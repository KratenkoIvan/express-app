import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{}>

export type CreatePost = Prisma.PostCreateInput

export type PostWithComments = Prisma.PostGetPayload<{
    include: {
        comments: true
    }
}>