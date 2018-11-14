import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { NoteComponent } from './note/note.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { ListViewComponent } from './list-view/list-view.component';

const appRoutes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'dashboard', component:DashboardComponent, canActivate: [CanActivateGuard] ,
children : [
  { path : 'view/notesview', component: NotesViewComponent},
  {path : '', redirectTo:'view/notesview', pathMatch:'full'}
]
},
  { path : '', redirectTo:'login' ,pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    NoteComponent,
    LoginComponent,
    DashboardComponent,
    NoteTakerComponent,
    NotesViewComponent,
    ListViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
