import { posts } from "@prisma/client";
import prisma from "database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<posts, "id">

async function getPosts() {
  const result = await prisma.posts.findMany();
  return result
}

async function getPost(id: number) {
  const result = await prisma.posts.findMany({
    where:{id:id}
  });

  return result;
}

async function createPost(post: CreatePost) {
  const { username, title, content} = post;
  await prisma.posts.create({
    data:{
      username,
      title,
      content
    }
  });  
}

async function deletePost(id: number) {
  await prisma.posts.delete({
    where:{id:id}
  })
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;