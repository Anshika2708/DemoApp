import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public editProfile(): void{
    alert("editProfile");
  }

  public editPhoto(): void{
    alert("editPhoto");
  }
  public iagree(): void{
    alert("iagree");
  }
}
