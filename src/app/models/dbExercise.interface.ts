export interface DbExercise {
  id: string;
  name: string;
  type: 'SERIE' | 'CRONO';
  tags: string[];
  image: string | null;
}
