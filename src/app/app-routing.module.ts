import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    // digitando http://localhost:4200/ ti rimanda direttamente a https://localhost:4200/homepage
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage', //https://localhost:4200/homepage
    component: HomepageComponent,
    
  },
  // {
  //   path: 'chisiamo', //https://localhost:4200/chisiamo
  //   component: ChisiamoComponent
  // },
  // {
  //   path: 'contatti', //https://localhost:4200/contatti
  //   component: ContattiComponent
  // },
  // {
  //   path: 'assistenza', //https://localhost:4200/assistenza
  //   component: AssistenzaComponent
  // },
  // {
  //   // rotta di default in caso nessuna rotta precedente sia soddisfatta
  //   path: '**',
  //   component: NotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
