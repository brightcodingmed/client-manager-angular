import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getAll().subscribe(res => {
      this.clients = res;
      console.log(res);
    });
  }

  deleteClient(id) {
    this.clientService.delete(id)
        .then(res => console.log(res))
        .catch(err => console.error(err))
  }

}
