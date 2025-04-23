import { DbExercise } from './dbExercise.interface';

export interface Template {
    id: string;
    name: string;
    defaultProperties: {
        'sets': number;
        'reps': number;
        'weight': number;
        'time': number;        
    };
    exercises?: TemplateExercise[];
} 

export interface TemplateExercise extends DbExercise {
    sets: {
        reps: number;
        weight: number;
        time: number;
    }[];
}
