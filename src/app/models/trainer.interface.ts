import { UUID } from "./uuid";

export interface TrainerContact {
    email?: string;
    phone?: string;
}

export interface Trainer {
    id: UUID;
    image: string;
    name: string;
    location: string;
    contact: TrainerContact;
    specialties: string[];
} 