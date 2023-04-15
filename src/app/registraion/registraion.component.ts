import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent {

  regForm!: FormGroup;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router){
    this.createForm();
  }

  public createForm() {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      age: ['', Validators.required ],
      state: ['', Validators.required ],
      country: ['', Validators.required ],
      address: ['', Validators.required ],
      tags: ['', Validators.required ],
      subscribe: ['', Validators.required ],
    });
  }

  public submit(): void {
    this.modalService.dismissAll();
    this.router.navigateByUrl('profile');
  }

  public dismissModal(){
    this.modalService.dismissAll();
  }
}
