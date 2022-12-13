export type Post = {
    content: string,
    date: string,
    id: string,
    title: string,
    user: string,
    reactions:Reactions
}
export type Reactions = {
    id: string,
    thumbsUp: string,
    hooray: string,
    heart: string,
    rocket: string,
    eyes: string,
    post: Post
}
export type User= {
    id: string,
    firstName: String,
    lastName: String,
    name: String,
    username: String,
  //  posts: Post[]
  }