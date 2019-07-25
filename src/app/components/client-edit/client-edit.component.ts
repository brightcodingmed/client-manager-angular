import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import Client from './../../models/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  myClient: Client = {
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    balance: 0,
    address: ''
  }
  id = 0;
  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.idDoc;
    this.clientService.getOne(this.id).subscribe((res: Client) => this.myClient = res)
  }

  updateClient(form) {
    console.log(form.value);
    this.clientService.update(this.id, form.value)
        .then(() => this.router.navigate(['/']))
        .catch((err) => console.error(err))
  }

}
