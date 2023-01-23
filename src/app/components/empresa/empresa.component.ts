import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  pdfSrc = "../../../assets/Politica SGC MG.pdf";

  constructor(private metaService: Meta) {



   }





  ngOnInit(): void {
  }

}
