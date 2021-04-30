import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispense } from '../dispense'
import { DispenseService } from '../dispense.service'

@Component({
  selector: 'app-update-dispense',
  templateUrl: './update-dispense.component.html',
  styleUrls: ['./update-dispense.component.css']
})
export class UpdateDispenseComponent implements OnInit {
  id: number
  dispense: Dispense = new Dispense();

  constructor(private dispenseService: DispenseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.dispenseService.getDispenseById(this.id).subscribe(data => {
      this.dispense = data;
    }, error => console.log(error));
  }
  goToDispenseList() {
    this.router.navigate(['/dispenses']);
  }

  async onSubmit() {
   await this.dispenseService.updateDispense(this.id, this.dispense).subscribe(data => {
      this.goToDispenseList();
    }, error => console.log(error));
  }
}

