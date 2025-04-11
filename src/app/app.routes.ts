import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { TemplateComponent } from './pages/template/template.component';
import { TrainerComponent } from './pages/trainer/trainer.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'trainer', component: TrainerComponent }
];
