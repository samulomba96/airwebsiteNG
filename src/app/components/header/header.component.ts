import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  helpMenuItems = [
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

  // navMenuItems = [
  //   'Novità e in evidenza',
  //   'Uomo',
  //   'Donna',
  //   'Kids',
  //   'Offerte'
  // ];

}
