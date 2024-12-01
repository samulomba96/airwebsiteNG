import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //MENU DI AIUTO
  //da implementare
  subMenuHelpItems = [
    'Aiuto',
    'Stato ordine',
    'Spedizione e consegna',
    'Restituzioni',
    'Tabelle delle taglie e delle misure',
    'Contattaci',
    'Informativa sulla privacy',
    'Condizioni di vendita',
    'Condizioni d\'uso',
    'Invia feedback'
  ];

  //da implementare
  helpMenuItems = [
    'Trova un negozio',
    'Aiuto',
    'Unisciti a noi',
    'Accedi' 
  ];

  //MENU NAV PRINCIPALE 
  primoSubMenuPrincipale = [
    'In evidenza',
    'Tutti i nuovi arrivi',
    'Best seller',
    'Member Shop',
    'Calendario dei lanci SNKRS',
    'Shop Air',
    'Summer of sport',
    'I must-have per il rientro a scuola',
  ];

  secondoSubMenuPrincipale = [
    'Le icone',
    'Air Force 1',
    'Air Jordan 1',
    'Air Max',
    'Dunk',
    'Blazer',
    'Pegasus',
    'Mercurial',
  ];

  terzoSubMenuPrincipale = [
    'Scopri lo sport',
    'Calcio',
    'Running',
    'Basket',
    'Fitness',
    'Golf',
    'Tennis',
    'Yoga',
    'Danza',
    'Skateboard',
  ];

  quartoSubMenuPrincipale = [
    'Di tendenza',
    'Air Max Home',
    'Sneakers Y2K',
    'Nike Style By',
    'Teenager',
    'EasyOn',
    'Idee regalo Nike',
    'Sostenibilità',
  ];
}
