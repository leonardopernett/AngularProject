import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DestacarDirective } from './directives/destacar.directive';
import { EmpleadosModule } from './pages/empleados/empleados.module';


@NgModule({
  declarations: [
    AppComponent,
    DestacarDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
