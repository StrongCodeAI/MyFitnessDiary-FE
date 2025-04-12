import type { UUID } from 'crypto';

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