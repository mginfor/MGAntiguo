import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { organigrama } from 'src/app/Const/Organigrama';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  pdfSrc = "../../../assets/Politica SGC MG.pdf";
  public organigrama = organigrama;
  constructor(private metaService: Meta) {



   }





  ngOnInit(): void {
  }

}
