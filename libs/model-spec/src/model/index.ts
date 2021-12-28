export interface IAppUser {
    id: number
    name: string
    pwd: string
    algos: number[]
}

export interface IAlgo{
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    richText: string
}