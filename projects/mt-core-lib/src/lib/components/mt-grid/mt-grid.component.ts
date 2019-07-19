import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ColumnDef } from '../common/ColumnDef';
import { GridConfig } from '../common/GridConfig';
import { IActionLinkBase } from '../common/ActionLink';

@Component({
  selector: 'mt-grid',
  templateUrl: './mt-grid.component.html',
  styleUrls: ['./mt-grid.component.css']
})

export class MtGridComponent implements OnInit {

  constructor() { }

  @Input() config: GridConfig;

  ngOnInit() {

  }
}
