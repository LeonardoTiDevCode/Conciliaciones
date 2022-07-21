import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './@shared/components/header/header.component';
import { SidebarComponent } from './@shared/components/sidebar/sidebar.component';
import { ContentComponent } from './@shared/components/content/content.component';
import { HomeComponent } from './pages/panel/home/home.component';
import { DashboardComponent } from './pages/panel/dashboard/dashboard.component';
import { PanelComponent } from './pages/panel/panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    DashboardComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
