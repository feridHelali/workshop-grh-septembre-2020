import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PersonnelModule } from './shared/personnel/personnel.module';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { PersonnelPageComponent } from './layout/personnel-page/personnel-page.component';
import { AboutPageComponent } from './layout/about-page/about-page.component';
import { ContactPageComponent } from './layout/contact-page/contact-page.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PersonnelPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    MainNavBarComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule, 
    PersonnelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
