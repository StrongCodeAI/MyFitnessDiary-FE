import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { parse as parseUUID } from 'uuid';
import { Trainer } from '../models/trainer.interface';
import { Template } from '../models/template.interface';

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
        id: parseUUID('550e8400-e29b-41d4-a716-446655440000'),
        image: 'https://reqres.in/img/faces/2-image.jpg',
        name: 'Laura Jiménez',
        location: 'Madrid',
        contact: {
          email: 'laura.jimenez@fitcoach.es',
          phone: '612 345 678'
        },
        specialties: ['Pérdida de peso', 'Entrenamiento en casa', 'Hábitos saludables']
      },
      {
        id: parseUUID('123e4567-e89b-42d3-a456-556642440000'),
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Carlos Márquez',
        location: 'Barcelona',
        contact: {
          email: 'carlos.marquez@zenpower.es'
        },
        specialties: ['Yoga para todos', 'Flexibilidad']
      },
      {
        id: parseUUID('7f6d45c8-a23b-4f89-95e7-8d12c4b9a6d3'),
        image: 'https://reqres.in/img/faces/3-image.jpg',
        name: 'Marta Ruiz',
        location: 'Valencia',
        contact: {
          email: 'marta.ruiz@strongzone.es',
          phone: '+34 622 998 344'
        },
        specialties: ['Mujeres activas', 'Fuerza y tonificación']
      },
      {
        id: parseUUID('550e8400-e29b-41d4-a716-446655440000'),
        image: 'https://reqres.in/img/faces/4-image.jpg',
        name: 'Diego Hernández',
        location: 'Sevilla',
        contact: {
          phone: '+34 611 223 456'
        },
        specialties: ['Running', 'Cardio en casa', 'Supera tus límites']
      },
      {
        id: parseUUID('123e4567-e89b-42d3-a456-556642440000'),
        image: 'https://reqres.in/img/faces/7-image.jpg',
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

  getTemplates(): Observable<Template[]> {
    // Datos mock de templates
    const mockTemplates: Template[] = [
      {
        id: parseUUID('550e8400-e29b-41d4-a716-446655440000'),
        name: 'Entrenamiento de 30 minutos',
        exerciseCount: 10,
      },
      {
        id: parseUUID('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'),
        name: 'Entrenamiento de 45 minutos',
        exerciseCount: 15,
      },
      {
        id: parseUUID('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'),
        name: 'Entrenamiento de 60 minutos',
        exerciseCount: 20,
      }

    ]
    return of(mockTemplates);
  }

} 