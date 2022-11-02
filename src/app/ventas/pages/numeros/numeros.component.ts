import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasBrutas: number = 123212.55;
  porcentaje: number = 0.91245;
  constructor() { }

  ngOnInit(): void {
  }

}
