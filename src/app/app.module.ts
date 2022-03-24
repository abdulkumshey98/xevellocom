import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './desktop/components/top-nav/top-nav.component';
import { IndexHomeComponent } from './desktop/views/index-home/index-home.component';
import { AllSvgsComponent } from './desktop/components/all-svgs/all-svgs.component';
import { FooterComponent } from './desktop/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    IndexHomeComponent,
    AllSvgsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
