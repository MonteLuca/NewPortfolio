import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ContactService } from '../../services/contact-service';
import { finalize } from 'rxjs';

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

  constructor(
    private fb: FormBuilder,
    private contactSvc: ContactService,
    private toast: MessageService
  ) {}

  get f() { return this.form.controls; }

  sendByEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;

    this.contactSvc.send(this.form.value as any)
      .pipe(finalize(() => this.sending = false))
      .subscribe({
        next: () => {
          this.toast.add({ severity: 'success', summary: 'Enviado', detail: '¡Gracias! Te respondo a la brevedad.' });
          this.form.reset();
        },
        error: (err) => {
          console.error(err);
          this.toast.add({ severity: 'error', summary: 'Ups', detail: 'No se pudo enviar. Intenta de nuevo.' });
        }
      });
  }

}
