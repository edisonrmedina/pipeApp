import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  nombreLower :string = "EDISON";  
  fechaHoy : Date = new Date(); //para js esta instancia comenzara para el dia de hoy
  constructor() { }

  ngOnInit(): void {
    
  }

}
