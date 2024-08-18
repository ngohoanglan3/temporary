import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ModifiedResponse } from '../../../core/models/provider.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { KeyValuePipe } from '../../../shared/pipes/keyValuePipe/key-value.pipe';
import { TitlePipe } from '../../../shared/pipes/titlePipe/title.pipe';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    OverlayPanelModule,
    BadgeModule,
    TooltipModule,
    KeyValuePipe,
    TitlePipe,
    ProgressBarModule,
    DialogModule,
    TabViewModule,
    ButtonGroupModule,
    TableModule
  ],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProviderComponent implements OnInit {
  @Input() providers: ModifiedResponse[];
  optionsClick: boolean;
  visible: boolean[];

  showDialog(index: number) {
    this.visible[index] = true;
  }

  OptionsClick(event: MouseEvent) {
    console.log("Button clicked", event);
  }

  constructor() {
    this.optionsClick = false;
    this.providers = [];
    this.visible = this.providers.map(() => false);
  }

  ngOnInit(): void {
    console.log(this.optionsClick);
  }
}
