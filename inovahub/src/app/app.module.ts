import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ApresentacaoHomepageComponent } from './apresentacao-homepage/apresentacao-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ApresentacaoHomepageComponent,
    HomepageComponent,
    SobreNosComponent,
    ConsultoriaComponent,
    SistemasComponent,
    NoticiasComponent,
    FaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
