import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { AddressComponent } from './components/address/address.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SoftwareDeveComponent } from './components/software-deve/software-deve.component';
import { AnIdeaComponent } from './components/an-idea/an-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExpertiseComponent,
    AddressComponent,
    ExperienceComponent,
    PricingComponent,
    SoftwareDeveComponent,
    AnIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
