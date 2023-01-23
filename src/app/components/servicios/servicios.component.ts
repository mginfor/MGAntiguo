import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({

  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  template: `<h1>Servicios Components</h1>`
})
export class ServiciosComponent implements OnInit {


  constructor( private meta: Meta) {}




  ngOnInit(): void {

  }



}
