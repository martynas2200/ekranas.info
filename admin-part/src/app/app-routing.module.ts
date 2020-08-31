import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { UnauthorizedComponent } from './ui/unauthorized/unauthorized.component';
import { TimetableComponent } from './timetable/timetable.component';
import { EditTimetableComponent } from './timetable/edit-timetable/edit-timetable.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { IndexComponent } from './index/index.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { InvitationComponent } from './invitation/invitation.component';

const routes: Routes = [
  { path: '', component: IndexComponent, data: {animation: 'index'}  },
  { path: 'kvietimas/:clue', component: InvitationComponent },
  { path: 'pranesimai', component: NotificationsComponent, canActivate: [ AuthGuard ], data: {title: 'Pranešimai'} },
  { path: 'tvarkarastis', component: TimetableComponent, canActivate: [ AuthGuard ], data: {title: 'Tvarkaraštis'} },
  { path: 'disciplinos', component: DisciplinesComponent, canActivate: [ AuthGuard ], data: {title: 'Disciplinos'} },
  { path: 'tvarkarastis/:semester/:day', component: EditTimetableComponent, canActivate: [ AuthGuard ] },
  { path: 'nustatymai', component: SettingsComponent, canActivate: [ AuthGuard ], data: {title: 'Nustatymai'}  },
  { path: 'paskyra', component: AccountComponent, canActivate: [ AuthGuard ], data: {title: 'Paskyra'}  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '404', component: NotFoundComponent, data: {title: '404'}  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
