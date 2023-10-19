import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Mapa', url: 'mapa', icon: 'map' },
    { title: 'Choferes', url: 'chofer', icon: 'car' },
];
  public labels = ['Contacto'];

  constructor(public router: Router, private menu: MenuController) {}


  soliciatar(){
    this.router.navigate(['/soliciatar'])
  }


  reservar(){
    this.router.navigate(['/reservar'])
  }

  horario(){
    this.router.navigate(['/horario'])
  }
  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/inicio"]);
    this.menu.close();
  }
}
