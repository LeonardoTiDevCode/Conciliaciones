import { Component, OnInit } from '@angular/core';
import { Conciliation } from 'src/app/models/conciliation';
import { ConciliationService } from 'src/app/services/conciliation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listConciliations: Array<Conciliation> = new Array<Conciliation>();

  constructor(private conciliationService: ConciliationService) { }

  ngOnInit(): void {
    this.getConciliations();
  }

  getConciliations() {
    this.conciliationService.getConciliations().subscribe(dataFromAPI => {
      this.listConciliations = dataFromAPI;
    }, error => {
      console.error('error');
    });
  }

  getData(noCliente: string) {
    console.log(noCliente);
  }

}
