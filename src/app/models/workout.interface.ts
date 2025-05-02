import { TemplateExercise } from "./template.interface";

export interface Workout {
    id: string;
    name: string;
    date: string;
    duration: number;
    exercises: TemplateExercise[];
}
