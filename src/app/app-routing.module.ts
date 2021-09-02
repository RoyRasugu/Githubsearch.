import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'users', component: ProfileComponent},
  { path: 'home', component: LandingPageComponent},
  { path: 'repo', component: RepositoryComponent},
  { path: 'search', component: ProfileComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
