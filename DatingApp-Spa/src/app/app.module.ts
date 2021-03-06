import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './_services/user.service';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { FileUploadModule } from 'ng2-file-upload';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import {TimeagoModule} from 'ngx-timeago';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';

export function tokenGetter(){
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig{
   overrides = {
      pinch: {enable: false},
      rotate: {enable: false}
   };
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      MemberMessagesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
     BsDatepickerModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
     NgxGalleryModule,
     PaginationModule.forRoot(),
     ReactiveFormsModule,
     TimeagoModule.forRoot(),
     ButtonsModule.forRoot(),
     FileUploadModule,
      JwtModule.forRoot(
         {
            config: {
               tokenGetter,
               whitelistedDomains: ['localhost:5000'],
               blacklistedRoutes: ['localhost:5000/api/auth']
            }
         }
      )
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      ListsResolver,
      MessagesResolver,
      PreventUnsavedChanges,
      {
         provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
