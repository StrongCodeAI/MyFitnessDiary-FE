export interface TrainerContact {
    email?: string;
    phone?: string;
}

export interface Trainer {
    id: string;
    image: string;
    name: string;
    location: string;
    contact: TrainerContact;
    specialties: string[];
} 