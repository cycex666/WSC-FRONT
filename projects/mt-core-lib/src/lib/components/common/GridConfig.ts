import { IconDef } from './IconDef';
import { GridModelBase } from '../../base/ModelBase';
import { ColumnDef } from './ColumnDef';

export enum GridSelectionMode {
  Single = 1,
  Multi = 2
}

export interface GridConfig {
  header: string;
  icon: IconDef;
  selectionMode?: GridSelectionMode;
  pagination?: boolean;
  dataSource: GridModelBase[];
  columns: ColumnDef[];
  currentSelection?: GridModelBase;
}
