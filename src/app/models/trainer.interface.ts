import { v4 as uuidv4 } from 'uuid';
/** Tipo personalizado para UUID v4 */
export type UUID = ReturnType<typeof uuidv4>;

export interface TrainerContact {
    email?: string;
    phone?: string;
}

export interface Trainer {
    id: UUID;
    name: string;
    location: string;
    contact: TrainerContact;
    specialties: string[];
} 