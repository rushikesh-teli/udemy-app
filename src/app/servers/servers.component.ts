import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatus = 'Offline';
  allowNewServer = false;
  serverName = '';
  showMessage = false;

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onServerOnline() {
    this.serverStatus = 'Online';
    this.showMessage = true;
  }

  onServerNameEntry(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
