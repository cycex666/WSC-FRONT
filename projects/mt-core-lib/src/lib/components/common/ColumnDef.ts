export enum SortDirection {
  ASC, DESC
}

export interface ColumnDef {
  header: string;
  sourceProperty: string;
  sort?: SortDirection;
}
