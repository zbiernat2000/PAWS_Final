import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dispense } from '../dispense';
import { DispenseService } from '../dispense.service'


@Component({
  selector: 'app-create-dispense',
  templateUrl: './create-dispense.component.html',
  styleUrls: ['./create-dispense.component.css']
})
export class CreateDispenseComponent implements OnInit {
  form: FormGroup;
  days: Array<number> = [0,1,2,3,4,5,6,7];
  dispense: Dispense = new Dispense();


  constructor(private dispenseService: DispenseService,
    private router: Router) {
    }

  ngOnInit(): void {
  }

  saveDispense() {
    this.dispenseService.createDispense(this.dispense).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }


  goToDispenseList() {
    this.router.navigate(['/dispenses']);
  }
  async onSubmit() {
    console.log(this.dispense);
    await this.saveDispense();
    this.goToDispenseList();
  }

}
