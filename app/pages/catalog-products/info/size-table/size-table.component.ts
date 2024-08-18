import { Component, Input, ViewEncapsulation } from '@angular/core';
import { sizeGuide } from '../../../../core/models/product.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { KeyValuePipe } from '../../../../shared/pipes/keyValuePipe/key-value.pipe';
import { ToInchPipe } from "../../../../shared/pipes/toInchPipe/to-inch.pipe";
import { TitlePipe } from "../../../../shared/pipes/titlePipe/title.pipe";

@Component({
  selector: 'app-size-table',
  standalone: true,
  imports: [CommonModule, TableModule, KeyValuePipe, ToInchPipe, TitlePipe],
  templateUrl: './size-table.component.html',
  styleUrl: './size-table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SizeTableComponent {
  @Input() inch: boolean;
  @Input() sizes: sizeGuide;

  constructor() {
    this.inch = false;
    this.sizes = {
      sizes: [],
      tableData: [],
    };
  }
}
