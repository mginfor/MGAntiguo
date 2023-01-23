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
    descrption: 'En MG Certifica te ayudamos a evaluar y gestionar las Competencias Laborales de tus colaboradores mediante metodologías de trabajo de calidad. ¡Conócenos!',
    ogTitle: 'https://mgcertifica.cl',
   }},

  { path: 'empresa',
   component: EmpresaComponent,
  data:{
    title: 'MG Certifica | empresa',
    descrption: 'Somos una empresa de evaluación y certificación de Competencias Laborales, con una trayectoria impecable de servicios a varias industrias. ¡Conócenos!',
    ogTitle: 'https://mgcertifica.cl/empresa',
  }
},
  { path: 'servicios',
   component: ServiciosComponent,
   data:{
    title: 'MG Certifica | servicios',
    descrption: 'Los servicios de MG Certifica están fundados en los lineamientos estratégicos del Sistema Nacional de Competencias Laborales. ¡Conoce cómo te ayudamos!',
    ogTitle: 'https://mgcertifica.cl/servicios',
  },
},
  { path: 'blog',
   component: BlogComponent,
   data:{
    title: 'Blog de Gestión de Competencias Laborales',
    descrption: 'Encuentra recomendaciones e información relevante para mejorar tu Gestión de Competencias siguiendo los lineamientos y normativas del programa Chile Valora.',
    ogTitle: 'https://mgcertifica.cl/blog',
   }
   },

  { path: 'blog/:blog', component: BlogPageComponent },


  { path: 'contacto2',
   component: Contacto2Component,
  data:{
    title: 'MG Certifica | contacto',
    descrption: 'Estamos listos para ayudarte. Aquí te dejamos nuestra información de contacto para que te comuniques cuando lo necesites. ¡Quedamos a tu disposición!',
    ogTitle: 'https://mgcertifica.cl/contacto2',

  }
  },


  { path: 'competenciaslaborales',
   component: CompetenciaslaboralesComponent,
  data:{
    title: 'Talos: Aprende de errores pasados para prevenir accidentes laborales',
    descrption: 'Entiende cómo Talos ayuda a identificar las competencias laborales descendidas de tus trabajadores que podrían estar originando accidentes laborales.',
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
    descrption: 'Entiende cómo Talos ayuda a identificar las competencias laborales descendidas de tus trabajadores que podrían estar originando accidentes laborales.',
    ogTitle: 'https://mgcertifica.cl/talos',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',

   } },




   { path: 'covid',
   component: CovidComponent,
   data:{
    title: 'MG CERTIFICA gana sello coviv',
    descrption: 'El pasado viernes 22 de abril, la Asociación Chilena de Seguridad, ACHS, le otorgó a MG Certifica, el Sello COVID-19, reconocimiento que acredita que la empresa ha tomado todos los resguardos y ha implementado protocolos...',
    ogTitle: 'https://mgcertifica.cl/covid',
    ogImage: 'url(assets/selloCovid.jpeg)',

   } },


  { path: 'consejo',
   component: ConsejosComponent,
   data:{
    title: '4 consejos para una Evaluación de Competencias Laborales',
    descrption: 'Aquí te dejamos unos consejos que te guiarán en el proceso de Evaluación de Competencias Laborales de tus trabajadores. ¡No te los pierdas!',
    ogTitle: 'https://mgcertifica.cl/consejo',
    ogImage: 'https://mgcertifica.cl/Talos eventos no deseados.jpeg',


   }
   },
  { path: 'gestion',
   component: GestionComponent,
  data:{
    title: '¿Por qué evaluar permite mejorar la Gestión de Competencias Laborales?',
    descrption: '¿Sabes qué hacer tras evaluar a tus trabajadores? Aquí te decimos cómo usar la información que obtienes para mejorar la Gestión de Competencias Laborales.',
    ogTitle: 'https://mgcertifica.cl/gestion',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  }
},
  { path: 'clave',
   component: ClavesComponent,
  data:{
    title: '3 aspectos clave para la Evaluación de Competencias Laborales',
    descrption: 'La Evaluación de Competencias Laborales es fundamental para el crecimiento empresarial. Conoce aquí qué aspectos considerar para realizarla adecuadamente.',
    ogTitle: 'https://mgcertifica.cl/clave',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'tecnologia',
   component: TecnologiaComponent,
   data:{
    title: 'Conoce la tecnología de MGC Talos para detectar competencias críticas',
    descrption: '¿Quieres aumentar la productividad de tu compañía? Conoce cómo la tecnología de MGC Talos te ayuda a lograrlo mediante la correcta gestión empresarial.',
    ogTitle: 'https://mgcertifica.cl/tecnologia',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


   }
  },
  { path: 'beneficios',
   component: BeneficiosComponent,
  data:{
    title: 'Los beneficios de la Evaluación de Competencias Laborales',
    descrption: 'Si no sabes si la Evaluación de Competencias Laborales es ideal para tu negocio, te decimos sus beneficios para que confirmes por qué es una gran opción.',
    ogTitle: 'https://mgcertifica.cl/beneficios',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'aspectos',
   component: AspectosComponent,
  data:{
    title: 'Claves de la Gestión por Competencias Laborales para tu empresa',
    descrption: '¿Quieres mejorar la Gestión de Competencias Laborales en tu empresa? Conoce aquí las claves para lograrlo con procesos y lineamientos estándares.',
    ogTitle: 'https://mgcertifica.cl/aspectos',
    ogImage: 'url(assets/Talos eventos no deseados.jpeg)',


  } },
  { path: 'acreditar',
   component: AcreditarCertificatComponent,
  data:{
    title: '¿Acreditar o Certificar las Competencias Laborales?',
    descrption: 'Una duda común es si debemos Acreditar o Certificar las Competencias Laborales. Te contamos sus diferencias y lo que pueden hacer por ti estos procesos.',
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
