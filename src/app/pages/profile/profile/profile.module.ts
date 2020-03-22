// Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components and guards
import { ProfileComponent } from '../profile.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
      // { path: '**', component: PageNotFoundComponent},
    ])
  ],
  exports: [
    RouterModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ]
})
export class ProfileModule { }
