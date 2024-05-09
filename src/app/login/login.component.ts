import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  data = '';
  getData() {
    alert(this.data);
  }

  storeValue(input: any) {
    this.data = input;
  }
}
