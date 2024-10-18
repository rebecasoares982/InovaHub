import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ApresentacaoHomepageComponent } from './apresentacao-homepage/apresentacao-homepage.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'apresentacao-homepage', component: ApresentacaoHomepageComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'consultoria', component: ConsultoriaComponent },
  { path: 'sistemas', component: SistemasComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
