import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id: number;
    name: string;
    count: number;
    retweet: number;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
