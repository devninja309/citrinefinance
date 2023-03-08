import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeFourComponent } from './components/home-four/home-four.component';
import { HomeFiveComponent } from './components/home-five/home-five.component';
import { HomeSixComponent } from './components/home-six/home-six.component';
import { HomeSevenComponent } from './components/home-seven/home-seven.component';
import { HomeEightComponent } from './components/home-eight/home-eight.component';
import { HomeNineComponent } from './components/home-nine/home-nine.component';
import { HomeTenComponent } from './components/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/home-twelve/home-twelve.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
    HomeEightComponent,
    HomeNineComponent,
    HomeTenComponent,
    HomeElevenComponent,
    HomeTwelveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
