import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { HomeComponent } from './components/home/home.component';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';
import { Contacto2Component } from './components/contacto2/contacto2.component';
import { BrechaComponent } from './components/brecha/brecha.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { TalosComponent } from './components/talos/talos.component';
import { ConsejosComponent } from './components/consejos/consejos.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ClavesComponent } from './components/claves/claves.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { AspectosComponent } from './components/aspectos/aspectos.component';
import { AcreditarCertificatComponent } from './components/acreditar-certificat/acreditar-certificat.component';
import { CovidComponent } from './components/blog/covid/covid.component';
import { ContacComponent } from './components/contac/contac.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
   data:{
    title: 'MG Certifica | Inicio',
    descrption: 'En MG Certifica te ayudamos a evaluar y gestionar las Competencias Laborales de tus colaboradores mediante metodolog??as de trabajo de calidad. ??Con??cenos!',
    ogTitle: 'https://mgcertifica.cl',
   }},

  { path: 'empresa',
   component: EmpresaComponent,
  data:{
    title: 'MG Certifica | empresa',
    descrption: 'Somos una empresa de evaluaci??n y certificaci??n de Competencias Laborales, con una trayectoria impecable de servicios a varias industrias. ??Con??cenos!',
    ogTitle: 'https://mgcertifica.cl/empresa',
  }
},
  { path: 'servicios',
   component: ServiciosComponent,
   data:{
    title: 'MG Certifica | servicios',
    descrption: 'Los servicios de MG Certifica est??n fundados en los lineamientos estrat??gicos del Sistema Nacional de Competencias Laborales. ??Conoce c??mo te ayudamos!',
    ogTitle: 'https://mgcertifica.cl/servicios',
  },
},
  { path: 'blog',
   component: BlogComponent,
   data:{
    title: 'Blog de Gesti??n de Competencias Laborales',
    descrption: 'Encuentra recomendaciones e informaci??n relevante para mejorar tu Gesti??n de Competencias siguiendo los lineamientos y normativas del programa Chile Valora.',
    ogTitle: 'https://mgcertifica.cl/blog',
   }
   },

  { path: 'blog/:blog', component: BlogPageComponent },


  { path: 'contacto2',
   component: Contacto2Component,
  data:{
    title: 'MG Certifica | contacto',
    descrption: 'Estamos listos para ayudarte. Aqu?? te dejamos nuestra informaci??n de contacto para que te comuniques cuando lo necesites. ??Quedamos a tu disposici??n!',
    ogTitle: 'https://mgcertifica.cl/contacto2',

  }
  },


  { path: 'competenciaslaborales',
   component: CompetenciaslaboralesComponent,
  data:{
    title: 'Talos: Aprende de errores pasados para prevenir accidentes laborales',
    descrption: 'Entiende c??mo Talos ayuda a identificar las competencias laborales descendidas de tus trabajadores que podr??an estar originando accidentes laborales.',
    ogTitle: 'https://mgcertifica.cl/talos',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  }
  },
  { path: 'search',
   component: SearchComponent,


  },
  { path: 'brecha',
   component: BrechaComponent,
   },

  { path: 'evaluacion',
   component: EvaluacionComponent,

   },

   { path: 'contact',
   component: ContacComponent,

   },


  { path: 'talos',
   component: TalosComponent,
   data:{
    title: 'Talos: Aprende de errores pasados para prevenir accidentes laborales',
    descrption: 'Entiende c??mo Talos ayuda a identificar las competencias laborales descendidas de tus trabajadores que podr??an estar originando accidentes laborales.',
    ogTitle: 'https://mgcertifica.cl/talos',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',

   } },




   { path: 'covid',
   component: CovidComponent,
   data:{
    title: 'MG CERTIFICA gana sello coviv',
    descrption: 'El pasado viernes 22 de abril, la Asociaci??n Chilena de Seguridad, ACHS, le otorg?? a MG Certifica, el Sello COVID-19, reconocimiento que acredita que la empresa ha tomado todos los resguardos y ha implementado protocolos...',
    ogTitle: 'https://mgcertifica.cl/covid',
    ogImage: 'url(assets/selloCovid.jpeg)',

   } },


  { path: 'consejo',
   component: ConsejosComponent,
   data:{
    title: '4 consejos para una Evaluaci??n de Competencias Laborales',
    descrption: 'Aqu?? te dejamos unos consejos que te guiar??n en el proceso de Evaluaci??n de Competencias Laborales de tus trabajadores. ??No te los pierdas!',
    ogTitle: 'https://mgcertifica.cl/consejo',
    ogImage: 'https://mgcertifica.cl/Talos eventos no deseados.jpeg',


   }
   },
  { path: 'gestion',
   component: GestionComponent,
  data:{
    title: '??Por qu?? evaluar permite mejorar la Gesti??n de Competencias Laborales?',
    descrption: '??Sabes qu?? hacer tras evaluar a tus trabajadores? Aqu?? te decimos c??mo usar la informaci??n que obtienes para mejorar la Gesti??n de Competencias Laborales.',
    ogTitle: 'https://mgcertifica.cl/gestion',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  }
},
  { path: 'clave',
   component: ClavesComponent,
  data:{
    title: '3 aspectos clave para la Evaluaci??n de Competencias Laborales',
    descrption: 'La Evaluaci??n de Competencias Laborales es fundamental para el crecimiento empresarial. Conoce aqu?? qu?? aspectos considerar para realizarla adecuadamente.',
    ogTitle: 'https://mgcertifica.cl/clave',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'tecnologia',
   component: TecnologiaComponent,
   data:{
    title: 'Conoce la tecnolog??a de MGC Talos para detectar competencias cr??ticas',
    descrption: '??Quieres aumentar la productividad de tu compa????a? Conoce c??mo la tecnolog??a de MGC Talos te ayuda a lograrlo mediante la correcta gesti??n empresarial.',
    ogTitle: 'https://mgcertifica.cl/tecnologia',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


   }
  },
  { path: 'beneficios',
   component: BeneficiosComponent,
  data:{
    title: 'Los beneficios de la Evaluaci??n de Competencias Laborales',
    descrption: 'Si no sabes si la Evaluaci??n de Competencias Laborales es ideal para tu negocio, te decimos sus beneficios para que confirmes por qu?? es una gran opci??n.',
    ogTitle: 'https://mgcertifica.cl/beneficios',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'aspectos',
   component: AspectosComponent,
  data:{
    title: 'Claves de la Gesti??n por Competencias Laborales para tu empresa',
    descrption: '??Quieres mejorar la Gesti??n de Competencias Laborales en tu empresa? Conoce aqu?? las claves para lograrlo con procesos y lineamientos est??ndares.',
    ogTitle: 'https://mgcertifica.cl/aspectos',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'acreditar',
   component: AcreditarCertificatComponent,
  data:{
    title: '??Acreditar o Certificar las Competencias Laborales?',
    descrption: 'Una duda com??n es si debemos Acreditar o Certificar las Competencias Laborales. Te contamos sus diferencias y lo que pueden hacer por ti estos procesos.',
    ogTitle: 'https://mgcertifica.cl/acreditar',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: '**', component: PagesnofoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
