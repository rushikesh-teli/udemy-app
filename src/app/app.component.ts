import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Test';
  users = ['Test', 'AutoTest'];
  showDetails = false;
  clickCounter = 0;

  resetUsername() {
    this.username = '';
  }

  addUser() {
    this.users.push(this.username);
  }

  showReset() {
    if (this.username === '') {
      return false;
    }
    return true;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.clickCounter++;
  }

  displayClass() {
    return this.clickCounter >= 5 ? true : false;
  }

  getBackground() {
    return this.clickCounter >= 5 ? 'blue' : 'white';
  }
}
