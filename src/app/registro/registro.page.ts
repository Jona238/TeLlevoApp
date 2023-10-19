import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, private alertController:AlertController ,private router: Router) { 
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'repetirContrasena': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }


  async registrar() {
   var f = this.formularioRegistro.value;
    if (f.usuario.length < 4 || f.usuario.length > 12) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'El usuario debe tener entre 4 y 12 caracteres',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
    if (f.correo.length > 30) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'El correo no debe tener más de 30 caracteres',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
  

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    
     else if (f.contrasena != f.repetirContrasena) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }else if (f.contrasena.length < 4 || f.contrasena.length > 8 ) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'La contraseña debe tener entre 4 y 8 caracteres ',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
     else if (/\s/.test(f.usuario )) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'El usuario no debe contener espacios',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    } else if (/\s/.test(f.correo )) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'El correo no debe contener espacios',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }else if (/\s/.test(f.contrasena )) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'La contraseña no debe contener espacios',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }else if (/\s/.test(f.repetir_contrasena )) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'La contraseña no debe contener espacios',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }  else {
      var nombreUsuario = f.usuario;
      var contrasenaUsuario = f.contrasena;

      localStorage.setItem('nombreUsuario', nombreUsuario);
      localStorage.setItem('contrasenaUsuario', contrasenaUsuario);

      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Registrado correctamente',
        buttons: ['OK']
      });
    
      await alert.present();

      localStorage.setItem('autenticado', 'true');
      this.router.navigate(["/home"]);
    }
  }

   /*registrar(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/inicio"]);
    this.menu.close();
  }*/

  /* goToHome(){
    this.router.navigate(['/home'])
  }
  */
}
