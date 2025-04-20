import { DbExercise } from './dbExercise.interface';

export interface Template {
    id: string;
    name: string;
    exerciseCount: number;
    defaultProperties: {
        'sets': number;
        'reps': number;
        'weight': number;
        'time': number;        
    };
    exercises?: TemplateExercise[];
} 

export interface TemplateExercise extends DbExercise {
    sets: number;
    reps: number;
    weight: number;
    time: number;
}
