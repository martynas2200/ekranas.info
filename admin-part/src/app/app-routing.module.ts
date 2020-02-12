import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedAuthGuard } from './need-auth-guard.service';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { UnauthorizedComponent } from './ui/unauthorized/unauthorized.component';

// Components
import { TimetableComponent } from './timetable/timetable.component';
import { EditTimetableComponent } from './timetable/edit-timetable/edit-timetable.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { IndexComponent } from './index/index.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { InvitationComponent } from './invitation/invitation.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'kvietimas/:clue', component: InvitationComponent },
  { path: 'pranesimai', component: NotificationsComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'tvarkarastis', component: TimetableComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'disciplinos', component: DisciplinesComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'tvarkarastis/:semester/:day', component: EditTimetableComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'nustatymai', component: SettingsComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'paskyra', component: AccountComponent, canActivate: [ NeedAuthGuard ] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
