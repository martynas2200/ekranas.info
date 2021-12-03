import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SettingsComponent } from './settings/settings.component';
import { IndexComponent } from './index/index.component';
import { ContactUsDialogComponent } from './contact/contact.component';
import { LoginService } from './login.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgsRevealModule} from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { NgxMasonryModule } from 'ngx-masonry';
// ----------
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { UnauthorizedComponent } from './ui/unauthorized/unauthorized.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { SelectNotificationComponent } from './notifications/dialogs/select-notification/select-notification.component';
import { AddNotificationComponent } from './notifications/dialogs/add-notification/add-notification.component';
import { NotificationComponent } from './notifications/notification/notification.component';
import { DeleteNotificationComponent } from './notifications/dialogs/delete-notification/delete-notification.component';
import { AccountComponent } from './account/account.component';
import { EditTimetableComponent } from './timetable/edit-timetable/edit-timetable.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { ChangeEmailComponent } from './account/change-email/change-email.component';
import { ChangeUsernameComponent } from './account/change-username/change-username.component';
import { ShowRoleComponent } from './account/show-role/show-role.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { NewDisciplineComponent } from './disciplines/new-discipline/new-discipline.component';
import { SelectDisciplineComponent } from './timetable/select-discipline/select-discipline.component';
import { NewTimesComponent } from './settings/dialogs/new-times/new-times.component';
import { ShowKeyComponent } from './settings/dialogs/show-key/show-key.component';
import { EditUserComponent } from './settings/dialogs/edit-user/edit-user.component';
import { SnackbarComponent } from './ui/snackbar/snackbar.component';
import { InvitationComponent } from './invitation/invitation.component';
import { UsersComponent } from './settings/users/users.component';
import { TimesComponent } from './settings/times/times.component';
import { LogoComponent } from './settings/logo/logo.component';
import { NewScreenComponent } from './settings/dialogs/new-screen/new-screen.component';
import { ScreensComponent } from './settings/screens/screens.component';
import { DialogChangeSettingsComponent } from './timetable/dialog-change-settings/dialog-change-settings.component';
import { DisciplinesService } from './disciplines.service';
import { CalendarComponent } from './notifications/calendar/calendar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TextFieldComponent } from './notifications/dialogs/add-notification/text-field/text-field.component';
import { VideoFieldComponent } from './notifications/dialogs/add-notification/video-field/video-field.component';
import { ImagesFieldComponent } from './notifications/dialogs/add-notification/images-field/images-field.component';
import { SlideFieldComponent } from './notifications/dialogs/add-notification/slide-field/slide-field.component';
// import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotificationsComponent,
    TimetableComponent,
    SettingsComponent,
    IndexComponent,
    ContactUsDialogComponent,
    SpinnerComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    SelectNotificationComponent,
    AddNotificationComponent,
    NotificationComponent,
    DeleteNotificationComponent,
    AccountComponent,
    EditTimetableComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    ChangeUsernameComponent,
    ShowRoleComponent,
    DisciplinesComponent,
    NewDisciplineComponent,
    SelectDisciplineComponent,
    NewTimesComponent,
    ShowKeyComponent,
    EditUserComponent,
    SnackbarComponent,
    InvitationComponent,
    UsersComponent,
    TimesComponent,
    LogoComponent,
    NewScreenComponent,
    ScreensComponent,
    DialogChangeSettingsComponent,
    CalendarComponent,
    MainNavComponent,
    TextFieldComponent,
    VideoFieldComponent,
    ImagesFieldComponent,
    SlideFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    NgsRevealModule,
    NgxMasonryModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRippleModule,
    CKEditorModule,
    LoadingBarHttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  entryComponents: [
    ContactUsDialogComponent,
    SelectNotificationComponent,
    AddNotificationComponent,
    DeleteNotificationComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    ChangeUsernameComponent,
    ShowRoleComponent,
    NewDisciplineComponent,
    SelectDisciplineComponent,
    NewTimesComponent,
    ShowKeyComponent,
    NewScreenComponent,
    EditUserComponent,
    DialogChangeSettingsComponent
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'lt-LT'}, LoginService, DisciplinesService, Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
