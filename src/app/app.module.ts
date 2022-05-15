import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {RouterModule, Routes} from "@angular/router";
import { SignInComponent } from './component/sign-in/sign-in.component';
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import { BlogComponent } from './component/blog/blog.component';
import {ToastrModule} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {ServicesComponent} from "./component/services/services.component";
import {AuthService} from "./service/auth.service";
import {AuthGuard} from "@angular/fire/auth-guard";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

const applicationRouters: Routes = [
  // add all components links here
  {path: '', component: HomeComponent },
  {path: 'gallery', component: GalleryComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    SignUpComponent,
    SignInComponent,
    ServicesComponent,
    BlogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(applicationRouters, {useHash: true}),
        BrowserModule,
        AppRoutingModule,
        NgxSpinnerModule,
        ToastrModule.forRoot(),
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
       AngularFirestoreModule,
       AngularFireStorageModule,
    ],
  providers: [AuthService, AngularFirestore, AuthGuard, NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
