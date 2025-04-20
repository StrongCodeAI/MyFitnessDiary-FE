import { Exercise } from './exercise.interface';

export interface Template {
    id: string;
    name: string;
    exerciseCount: number;
    defaultProperties: {
        'sets': number;
        'reps': number;
        'time': number;        
    };
    exercises?: Exercise[];
} 