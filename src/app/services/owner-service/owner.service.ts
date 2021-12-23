import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getOwnerWorkshops() {
    return this.http.get<any>(this.apiUrl + 'owner/info');
  }
  createWorkshop(workshop: any) {
    return this.http.post<any>(this.apiUrl + 'workshops', workshop);
  }
  getMessages() {
    return this.http.post<any>(this.apiUrl + 'owner/workshop_messages', { workshop_id: localStorage.getItem('workshop_id') });
  }
  messageVisibility(id: any) {
    return this.http.post<any>(this.apiUrl + 'owner/message_visibility', { message_id: id });
  }
  addMessage(message: any) {
    return this.http.post<any>(this.apiUrl + 'owner/w_messages', message)
  }
  destroyMessage(id: any) {
    return this.http.delete<any>(this.apiUrl + 'owner/w_messages/' + id);
  }
}
