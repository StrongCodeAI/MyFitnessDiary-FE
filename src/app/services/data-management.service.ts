import { Injectable } from '@angular/core';
import { map, Observable, of, catchError } from 'rxjs';
import { Trainer } from '../models/trainer.interface';
import { Template } from '../models/template.interface';
import { v4 as uuidv4 } from 'uuid';

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
        id: uuidv4(),
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
        id: uuidv4(),
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Carlos Márquez',
        location: 'Barcelona',
        contact: {
          email: 'carlos.marquez@zenpower.es'
        },
        specialties: ['Yoga para todos', 'Flexibilidad']
      },
      {
        id: uuidv4(),
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
        id: uuidv4(),
        image: 'https://reqres.in/img/faces/4-image.jpg',
        name: 'Diego Hernández',
        location: 'Sevilla',
        contact: {
          phone: '+34 611 223 456'
        },
        specialties: ['Running', 'Cardio en casa', 'Supera tus límites']
      },
      {
        id: uuidv4(),
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

  mockTemplates: Template[] = [
    {
      id: uuidv4(),
      name: 'Entrenamiento de 30 minutos',
      exerciseCount: 10,
      defaultProperties: {
        'sets': 3,
        'reps': 10,
        'time': 30
      }
    },
    {
      id: uuidv4(),
      name: 'Entrenamiento de 45 minutos',
      exerciseCount: 15,
      defaultProperties: {
        'sets': 3,
        'reps': 10,
        'time': 45
      }
    },
    {
      id: uuidv4(),
      name: 'Entrenamiento de 60 minutos',
      exerciseCount: 20,
      defaultProperties: {
        'sets': 3,
        'reps': 10,
        'time': 60
      }
    }
  ]

  getTemplates(): Observable<Template[]> {
    // Datos mock de templates
    return of(this.mockTemplates);
  }

  getTemplateById(templateId: string): Observable<Template> {
    const template = this.mockTemplates.find(t => t.id === templateId);
    if (!template) {
      throw new Error(`No se encontró la plantilla con ID: ${templateId}`);
    }
    return of(template);
  }

} 