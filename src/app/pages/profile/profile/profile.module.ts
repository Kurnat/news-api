// Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components and guards
import { ProfileComponent } from '../profile.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';


// Modules
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent, canActivate: [AuthGuard] }
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
