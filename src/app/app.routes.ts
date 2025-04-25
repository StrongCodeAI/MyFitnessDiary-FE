import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/login/registration/registration.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TemplateListComponent } from './pages/template/list/template-list.component';
import { TemplateEditComponent } from './pages/template/edit/template-edit.component';
import { TemplateViewComponent } from './pages/template/edit/template-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'template-list', component: TemplateListComponent },
  { path: 'template-edit', component: TemplateEditComponent },
  { path: 'template-edit/:id', component: TemplateEditComponent },
  { path: 'template-view/:id', component: TemplateViewComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'pricing', component: PricingComponent }
];
