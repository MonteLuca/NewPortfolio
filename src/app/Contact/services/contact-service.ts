import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactRequest } from '../data/contact.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private base = environment.apiBase;
  constructor(private http: HttpClient) {
    console.log('🚀 ContactService - API Base URL:', this.base);
  }

  send(payload: ContactRequest) {
    return this.http.post<void>(`${this.base}api/contact`, payload);
  }
}
