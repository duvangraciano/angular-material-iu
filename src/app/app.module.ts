import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule  } from '@angular/router';

import { FormsModule } from '@angular/forms'; // módulos o libreria Forms.
import { HttpModule } from '@angular/http'; // módulo http.

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // angular material animaciones
import { 
  //MatAutocompleteModule,
  MatButtonModule,
  //MatButtonToggleModule,
  MatCardModule,
  //MatCheckboxModule,
  MatChipsModule,
  //MatDatepickerModule,
  //MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  //MatPaginatorModule,
  //MatProgressBarModule,
  //MatProgressSpinnerModule,
  //MatRadioModule,
  //MatRippleModule,
  //MatSelectModule,
  MatSidenavModule,
  //MatSliderModule,
  //MatSlideToggleModule,
  //MatSnackBarModule,
  //MatSortModule,
  //MatStepperModule,
  //MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  //MatTooltipModule,
} from '@angular/material'; // angular material

import 'rxjs/add/operator/map';


// Import Components
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AutenSeguridadGuard } from './auten-seguridad.guard';

// Import Services
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
        //redirectTo:'/login',
        //pathMatch: 'full'
      },
      {
        path: 'dashboard',
        //canActivate: [AutenSeguridadGuard],
        component: DashboardComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'acerca-de',
        component: AcercaDeComponent
      },
      { 
        path: '**', 
        component: PageNotFoundComponent 
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //MatAutocompleteModule,
    MatButtonModule,
    //MatButtonToggleModule,
    MatCardModule,
    //MatCheckboxModule,
    MatChipsModule,
    //MatDatepickerModule,
    //MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    //MatPaginatorModule,
    //MatProgressBarModule,
    //MatProgressSpinnerModule,
    //MatRadioModule,
    //MatRippleModule,
    //MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,
    //MatSlideToggleModule,
    //MatSnackBarModule,
    //MatSortModule,
    //MatStepperModule,
    //MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    //MatTooltipModule,
  ],
  providers: [UsuarioService, AutenSeguridadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
