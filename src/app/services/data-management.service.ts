import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trainer } from '../models/trainer.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  constructor() { }

  // Método mock para obtener datos de entrenadores
  getTrainers(): Observable<Trainer[]> {
    // Datos mock de entrenadores
    const mockTrainers: Trainer[] = [
      {
        id: 'a1b2c3d4-e5f6-47g8-h9i0-j1k2l3m4n5o6',
        name: 'Laura Jiménez',
        location: 'Madrid',
        contact: {
          email: 'laura.jimenez@fitcoach.es',
          phone: '612 345 678'
        },
        specialties: ['Pérdida de peso', 'Entrenamiento en casa', 'Hábitos saludables']
      },
      {
        id: 'b2c3d4e5-f6g7-48h9-i0j1-k2l3m4n5o6p7',
        name: 'Carlos Márquez',
        location: 'Barcelona',
        contact: {
          email: 'carlos.marquez@zenpower.es'
        },
        specialties: ['Yoga para todos', 'Flexibilidad']
      },
      {
        id: 'c3d4e5f6-g7h8-49i0-j1k2-l3m4n5o6p7q8',
        name: 'Marta Ruiz',
        location: 'Valencia',
        contact: {
          email: 'marta.ruiz@strongzone.es',
          phone: '+34 622 998 344'
        },
        specialties: ['Mujeres activas', 'Fuerza y tonificación']
      },
      {
        id: 'd4e5f6g7-h8i9-50j1-k2l3-m4n5o6p7q8r9',
        name: 'Diego Hernández',
        location: 'Sevilla',
        contact: {
          phone: '+34 611 223 456'
        },
        specialties: ['Running', 'Cardio en casa', 'Supera tus límites']
      },
      {
        id: 'e5f6g7h8-i9j0-51k2-l3m4-n5o6p7q8r9s0',
        name: 'Ainoha Torres',
        location: 'Bilbao',
        contact: {
          email: 'ainoha.torres@fitlifestyle.es',
          phone: '655 789 012'
        },
        specialties: ['Estar en forma', 'Entrenamiento funcional']
      }
    ];
    return of(mockTrainers);
  }

} 