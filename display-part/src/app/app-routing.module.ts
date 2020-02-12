import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupComponent } from './startup/startup.component';
import { MainComponent } from './main/main.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';

const routes: Routes = [
  { path: '', redirectTo: '/nokey', pathMatch: 'full' },
  { path: 'saver', component: ScreensaverComponent },
  { path: 'main', component: MainComponent },
  { path: ':key', component: StartupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
