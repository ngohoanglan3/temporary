import { Component, Input } from '@angular/core';
import { Summary } from '../../../core/models/product.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  @Input() summary: Summary;

  constructor() {
    this.summary = {
      name: '',
      details: '',
      model: '',
      brand_name: '',
    };
  }
}
