import { Component, OnInit } from '@angular/core';
import { ColumnDef, GridConfig, IconSource, GridSelectionMode, SortDirection } from 'mt-core-lib';
import { GridModelBase } from 'mt-core-lib';

@Component({
  selector: 'app-contractors-grid',
  templateUrl: './contractors-grid.component.html',
  styleUrls: ['./contractors-grid.component.css']
})
export class ContractorsGridComponent implements OnInit {

  config: GridConfig;
  columns: ColumnDef[];
  dataSource: GridModelBase[];
  selectedRow: GridModelBase;

  constructor() { }

  ngOnInit() {

    
    this.columns = [
      { header: "Col1", sourceProperty: "col1", sort: SortDirection.ASC },
      { header: "Col2", sourceProperty: "col2", sort: SortDirection.ASC },
      { header: "Col3", sourceProperty: "col3", sort: SortDirection.ASC },
      { header: "Col4", sourceProperty: "col4", sort: SortDirection.ASC },
      { header: "Col5", sourceProperty: "col5", sort: SortDirection.ASC },
    ];

    this.dataSource = [
      <GridModelBase>{ Id: 1, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 2, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 3, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 4, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 5, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 6, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 7, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true },
      <GridModelBase>{ Id: 8, col1: '1111', col2: '2222', col3: '4444', col5: '5555', filter: (ph) => true }
    ];

    this.config = this.initializeGridConfig();
  }


  initializeGridConfig(): GridConfig {
    return {
      header: 'Contractors',
      icon: {
        name: 'users',
        source: IconSource.FontAwersom
      },
      pagination: true,
      selectionMode: GridSelectionMode.Multi,
      dataSource: this.dataSource,
      columns: this.columns,
      currentSelection: this.selectedRow,
    };
  }
}
