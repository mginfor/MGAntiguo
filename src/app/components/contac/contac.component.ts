import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {

  constructor(private _MessageService: BlogService) { }

  ngOnInit(): void {
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
    }
}


