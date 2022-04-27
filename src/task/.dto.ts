import { CommentaryEntity } from "./entity/commentary.entity"

export class createTask {
    id: number
    title: string
    assignedTo: string
    description: string
    state: string
    severity: string
    area: string
    createdAt: Date
}

export class updateTask {
    id: number
    title: string
    assignedTo: string
    description: string
    state: string
    severity: string
    area: string
    updatedAt: Date
}

export class createCommentary {
    id: number
    task: number
    commentary: string
    createdAt: Date
}

export class updateCommentary {
    id: number
    task: number
    commentary: string
    updatedAt: Date
}