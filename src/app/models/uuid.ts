import { v4 as uuidv4 } from 'uuid';

/** Tipo personalizado para UUID v4 */  
export type UUID = ReturnType<typeof uuidv4>;