import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { NavbardComponent } from './navbard/navbard.component';
import { MessageComponent } from './message/message.component';
import { ButtonComponent } from './button/button.component';
import { BardComponent } from './bard/bard.component';
import { TercerComponent } from './tercer/tercer.component';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbardComponent,
    MessageComponent,
    ButtonComponent,
    BardComponent,
    TercerComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
