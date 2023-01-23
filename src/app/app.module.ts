import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { BlogComponent } from './components/blog/blog.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { Contacto2Component } from './components/contacto2/contacto2.component';
import { SearchComponent } from './components/search/search.component';
import { BrechaComponent } from './components/brecha/brecha.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { TalosComponent } from './components/talos/talos.component';
import { CompetenciasCriticasComponent } from './components/competencias-criticas/competencias-criticas.component';
import { ConsejosComponent } from './components/consejos/consejos.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { AspectosComponent } from './components/aspectos/aspectos.component';
import { ClavesComponent } from './components/claves/claves.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { AcreditarCertificatComponent } from './components/acreditar-certificat/acreditar-certificat.component';
import { CovidComponent } from './components/blog/covid/covid.component';
import { ContacComponent } from './components/contac/contac.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    EmpresaComponent,
    BlogComponent,
    FooterComponent,
    PagesnofoundComponent,
    CompetenciaslaboralesComponent,
    BlogPageComponent,
    SpinnerComponent,
    Contacto2Component,
    SearchComponent,
    BrechaComponent,
    EvaluacionComponent,
    TalosComponent,
    CompetenciasCriticasComponent,
    ConsejosComponent,
    GestionComponent,
    AspectosComponent,
    ClavesComponent,
    BeneficiosComponent,
    AcreditarCertificatComponent,
    CovidComponent,
    ContacComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule



  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
