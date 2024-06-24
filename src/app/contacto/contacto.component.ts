import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }
}
