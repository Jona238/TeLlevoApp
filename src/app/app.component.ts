import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Mis viajes', url: 'recuperate', icon: 'car' },
    { title: 'Historial', url: 'register', icon: 'journal' },
   
    { title: 'Salir', url: 'Salir', icon: 'log-out' },
  ];
  public labels = ['Ofertas', 'Viajes Especiales', 'Reclamos'];
  constructor() {}
}
