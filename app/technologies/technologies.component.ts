import { Component, OnInit } from '@angular/core';
import { TechnologiesbooksService } from '../technologiesbooks.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TEchnologiesComponent implements OnInit {
  public technologies: any = [];
  constructor(public tobj:TechnologiesbooksService) { }

  ngOnInit(): void {
   this.technologies = this.tobj.getTechBook();
  }

}
