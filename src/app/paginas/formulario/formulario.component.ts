import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombreControl = new FormControl(
    '',[Validators.required, Validators.minLength(4)]
  );
  apellidoControl = new FormControl(
    '',[Validators.required, Validators.minLength(4)]
  );
  emailControl = new FormControl(
    '',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
  );
  passControl = new FormControl(
    '',[Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern("^[A-Za-z0-9#&]+$")]
  );

  formRegistar = new FormGroup({
    nombreUsuario: this.nombreControl,
    apellidoUsuario: this.apellidoControl,
    emailUsuario: this.emailControl,
    passUsuario: this.passControl
  })
  onSubmit() {
    console.log(this.formRegistar.value)
  }
}
