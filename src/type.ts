export type Post = {
    content: string,
    date: string,
    id: string,
    title: string,
    user: string,
    reactions:Reactions
}
export type Reactions = {
    thumbsUp: number,
    hooray: number,
    heart: number,
    rocket: number,
    id: string
}