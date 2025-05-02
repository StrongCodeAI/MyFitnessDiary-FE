import { Injectable } from '@angular/core';
import { map, Observable, of, catchError } from 'rxjs';
import { Trainer } from '../models/trainer.interface';
import { Template } from '../models/template.interface';
import { v4 as uuidv4 } from 'uuid';
import { DbExercise } from '../models/dbExercise.interface';
import { AiAdvise } from '../models/advise.interface';
import { Advice1IconComponent } from '../components/icons/advice1.component';
import { Advice2IconComponent } from '../components/icons/advice2.component';
import { Advice3IconComponent } from '../components/icons/advice3.component';
import { Advice5IconComponent } from '../components/icons/advice5.component';
import { Advice4IconComponent } from '../components/icons/advice4.component';
import { Advice6IconComponent } from '../components/icons/advice6.component';
import { Workout } from '../models/workout.interface';

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
      defaultProperties: {
        'sets': 3,
        'reps': 20,
        'weight': 20,
        'time': 30
      }
    },
    {
      id: uuidv4(),
      name: 'Entrenamiento de 45 minutos',
      defaultProperties: {
        'sets': 3,
        'reps': 10,
        'weight': 15,
        'time': 45
      }
    },
    {
      id: uuidv4(),
      name: 'Entrenamiento de 60 minutos',
      defaultProperties: {
        'sets': 2,
        'reps': 5,
        'weight': 10,
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

  mockExercises: DbExercise[] = [
    {
      id: uuidv4(),
      name: 'Cinta de correr',
      type: 'CRONO',
      tags: ['cinta', 'cardio', 'caminar'],
      image: 'https://images.unsplash.com/vector-1741267133085-fd8ee32e56b5?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: uuidv4(),
      name: 'Sentadilla',
      type: 'SERIE',
      tags: ['pierna', 'sentadilla'],
      image: 'https://media.istockphoto.com/id/1306353165/es/vector/joven-afroamericana-mujer-en-ropa-deportiva-haciendo-sentadillas-en-la-alfombra.jpg?s=612x612&w=0&k=20&c=fT7aKUWYw0rqVYn54i7zo6-RHsEFAl_MrY0voH33l8w='
    },
    {
      id: uuidv4(),
      name: 'Saltar la cuerda',
      type: 'CRONO',
      tags: ['cuerda', 'cardio', 'saltar'],
      image: 'https://static.vecteezy.com/system/resources/previews/036/390/541/non_2x/a-man-skipping-with-a-jump-rope-a-man-wearing-a-sleeveless-t-shirt-and-tight-shorts-vector.jpg'
    },
    {
      id: uuidv4(),
      name: 'Peso muerto',
      type: 'SERIE',
      tags: ['pierna', 'peso muerto'],
      image: 'https://media.istockphoto.com/id/1249228259/es/vector/mujeres-haciendo-barbell-deadlift-entrenamiento-vista-lateral.jpg?s=612x612&w=0&k=20&c=_RbEsHcDAVqMEQXcJCDe1Uzk2DA5gVrjsfOidFo1gRU='
    },
    {
      id: uuidv4(),
      name: 'Curl martillo',
      type: 'SERIE',
      tags: ['biceps', 'curl martillo'],
      image: 'https://static.vecteezy.com/system/resources/previews/030/216/221/non_2x/man-doing-seated-dumbbell-bicep-hammer-curls-exercise-vector.jpg'
    },
    {
      id: uuidv4(),
      name: 'Press banca',
      type: 'SERIE',
      tags: ['pectorales', 'press banca'],
      image: 'https://media.istockphoto.com/id/1028234906/es/vector/hombre-trabajando-con-barra-tumbado-en-un-banco-press-de-banca-colorido-isom%C3%A9trica-figura.jpg?s=612x612&w=0&k=20&c=DuCUuK5sq0mSJ0z7cWVKzVbcNdUy5OjJ_conZyjUYuo='
    },
    {
      id: uuidv4(),
      name: 'Caminata en pendiente',
      type: 'CRONO',
      tags: ['caminar', 'pendiente', 'cardio'],
      image: 'https://media.istockphoto.com/id/925492594/es/vector/hombre-en-la-ilustraci%C3%B3n-del-icono-de-cinta-de-correr.jpg?s=612x612&w=0&k=20&c=5Z9DnLnXYTHRgDWRyi0OZNplsvZXwhih2fxw32mozPQ='
    },
    {
      id: uuidv4(),
      name: 'Russian Twists',
      type: 'SERIE',
      tags: ['abdominales', 'russian twists'],
      image: 'https://t3.ftcdn.net/jpg/02/62/56/28/360_F_262562893_FRyE74UesGLF5qVDLzVcU13obDhUBzbH.jpg'
    }
  ]

  getExercises(): Observable<DbExercise[]> {
    return of(this.mockExercises.sort((a, b) => a.name.localeCompare(b.name)));
  }

  createTemplate(template: Template): Observable<Template> {
    this.mockTemplates.push(template);
    return of(template);
  }

  deleteTemplate(templateId: string): Observable<void> {
    this.mockTemplates = this.mockTemplates.filter(t => t.id !== templateId);
    return of(undefined);
  }

  updateTemplate(template: Template): Observable<Template> {
    const index = this.mockTemplates.findIndex(t => t.id === template.id);
    if (index !== -1) {
      this.mockTemplates[index] = template;
    }
    return of(template);
  }

  mockMarkedDays: string[] = ['2025-05-01', '2025-05-02', '2025-04-20'];

  getMarkedDaysForMonth(year: number, month: number): Observable<string[]> {
    return of(this.mockMarkedDays);
  }

  mockIcons: any[] = [
    Advice1IconComponent,
    Advice2IconComponent,
    Advice3IconComponent,
    Advice4IconComponent,
    Advice5IconComponent,
    Advice6IconComponent
  ]

  mockAiAdvises: AiAdvise[] = [
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-05-01',
      advise: '¡No te olvides de tu cita con el entrenador! 💪🏼'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-04-20',
      advise: 'Recuerda estirar después del entrenamiento para evitar lesiones'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-04-15',
      advise: 'Parece que hace tiempo que no entrenas espalda. ¿Por qué no intentarlo hoy?'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-04-10',
      advise: 'Llevas 3 días seguidos entrenando, ¡quizás sea momento de un descanso!'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-04-05',
      advise: 'Estás muy cerca de alcazar tu objetivo, sigue luchando'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-03-30',
      advise: 'Hidrátate bien antes, durante y después del ejercicio'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-03-25',
      advise: 'Mantén una postura correcta en cada ejercicio'
    },
    {
      icon: this.mockIcons[Math.floor(Math.random() * this.mockIcons.length)],
      date: '2025-03-20',
      advise: 'Respira de forma controlada durante el esfuerzo'
    }
  ]

  getAiAdvises(): Observable<AiAdvise[]> {
    return of(this.mockAiAdvises);
  }

  mockWorkouts: Workout[] = [
    {
      id: uuidv4(),
      name: 'Entrenamiento de 30 minutos',
      date: '2025-05-01',
      duration: 30,
      exercises: [
        {
          id: this.mockExercises[0].id,
          name: this.mockExercises[0].name,
          type: this.mockExercises[0].type,
          tags: this.mockExercises[0].tags,
          image: this.mockExercises[0].image,
          sets: [{
            reps: 10,
            weight: 10,
            time: 30
          }]
        },
        {
          id: this.mockExercises[1].id,
          name: this.mockExercises[1].name,
          type: this.mockExercises[1].type,
          tags: this.mockExercises[1].tags,
          image: this.mockExercises[1].image,
          sets: [
            {
              reps: 10,
              weight: 10,
              time: 30
            },
            {
              reps: 10,
              weight: 10,
              time: 30
            },
            {
              reps: 10,
              weight: 10,
              time: 30
            }
          ]
        },
        {
          id: this.mockExercises[1].id,
          name: this.mockExercises[1].name,
          type: this.mockExercises[1].type,
          tags: this.mockExercises[1].tags,
          image: this.mockExercises[1].image,
          sets: [{
            reps: 10,
            weight: 10,
            time: 30
          },
          {
            reps: 10,
            weight: 10,
            time: 30
          },
          {
            reps: 10,
            weight: 10,
            time: 30
          }]
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Entrenamiento de 45 minutos',
      date: '2025-05-02',
      duration: 45,
      exercises: [
        {
          id: this.mockExercises[2].id,
          name: this.mockExercises[2].name,
          type: this.mockExercises[2].type,
          tags: this.mockExercises[2].tags,
          image: this.mockExercises[2].image,
          sets: [{
            reps: 10,
            weight: 10,
            time: 30
          },
          {
            reps: 10,
            weight: 10,
            time: 30
          }]
        },
        {
          id: this.mockExercises[3].id,
          name: this.mockExercises[3].name,
          type: this.mockExercises[3].type,
          tags: this.mockExercises[3].tags,
          image: this.mockExercises[3].image,
          sets: [{
            reps: 10,
            weight: 10,
            time: 30
          },
          {
            reps: 10,
            weight: 10,
            time: 30
          }]
        },
        {
          id: this.mockExercises[4].id,
          name: this.mockExercises[4].name,
          type: this.mockExercises[4].type,
          tags: this.mockExercises[4].tags,
          image: this.mockExercises[4].image,
          sets: [{
            reps: 10,
            weight: 10,
            time: 30
          },
          {
            reps: 10,
            weight: 10,
            time: 30
          }]
        }
      ]
    }
  ]
  
  getWorkouts(): Observable<Workout[]> {
    return of(this.mockWorkouts);
  }

  getWorkoutById(workoutId: string): Observable<Workout> {
    const workout = this.mockWorkouts.find(w => w.id === workoutId);
    if (!workout) {
      throw new Error(`No se encontró el entrenamiento con ID: ${workoutId}`);
    }
    return of(workout);
  }
  
}