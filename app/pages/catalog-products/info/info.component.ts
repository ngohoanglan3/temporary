import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePipe } from '../../../shared/pipes/titlePipe/title.pipe';
import { TableModule } from 'primeng/table';
import { Info } from '../../../core/models/product.model';
import { KeyValuePipe } from "../../../shared/pipes/keyValuePipe/key-value.pipe";
import { SizeTableComponent } from "./size-table/size-table.component";
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, TitlePipe, TableModule, KeyValuePipe, SizeTableComponent, AccordionModule, TabViewModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent {
  @Input() info: Info;

  constructor() {
    this.info = {
      about: '',
      key_features: [],
      care_instructions: [],
      size_guide: {
        sizes: [],
        tableData: []
      }
    }
  }

}
