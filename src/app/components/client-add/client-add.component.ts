import Client from './../../models/client';
import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  myClient: Client = {
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    balance: 0,
    address: ''
  }
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  info(data) {
    console.log(data)
  }

  addClient(form) {
    console.log(form);

    if(form.valid) {

      this.clientService.persist(form.value)
          .then(res => {
              this.router.navigate(['/clients']);
          })
          .catch(err => console.error(err))
    }else {
      alert('please check your data in form')
    }
  }

}
