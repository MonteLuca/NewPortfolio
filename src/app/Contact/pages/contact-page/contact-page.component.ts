import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  readonly whatsappNumber = '5492615120574';

  sending = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  get f() { return this.form.controls; }

  sendToWhatsApp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;

    const v = this.form.value;
    const text =
      `Nuevo contacto desde el portfolio:%0A` +
      `• Nombre: ${v.name}%0A` +
      `• Email: ${v.email}%0A` +
      `• Asunto: ${v.subject}%0A` +
      `• Mensaje:%0A${(v.message || '').trim()}`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Abrimos en nueva pestaña para no romper SPA
    window.open(url, '_blank', 'noopener,noreferrer');
    this.sending = false;
  }

}
