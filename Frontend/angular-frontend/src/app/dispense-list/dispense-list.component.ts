import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dispense } from '../dispense';
import { DispenseService } from '../dispense.service';

@Component({
  selector: 'app-dispense-list',
  templateUrl: './dispense-list.component.html',
  styleUrls: ['./dispense-list.component.css']
})
export class DispenseListComponent implements OnInit {

  constructor(private dispensesService: DispenseService, private router: Router) { }

  dispenses: Dispense[];
  ngOnInit(): void {
    this.getDispenses();
  }

  private getDispenses() {
    this.dispensesService.getDispenseList().subscribe(data => {
      this.dispenses = data;
    })
  }

  updateDispense(id: number) {
    this.router.navigate(['update-dispenses', id]);
  }

  deleteDispense(id: number) {
    this.dispensesService.deleteDispense(id).subscribe(data => {
      console.log(data);
      this.getDispenses();
    });

  }

}
