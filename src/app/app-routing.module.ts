// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent, pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
