import { DbExercise } from './dbExercise.interface';

export interface Template {
    id: string;
    name: string;
    exerciseCount: number;
    defaultProperties: {
        'sets': number;
        'reps': number;
        'time': number;        
    };
    exercises?: DbExercise[];
} 