import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });
  texto1: string = 'Fernando Herrera';
  color: string = 'red';

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string) {
    return this.miFormulario.get(campo)?.invalid;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
