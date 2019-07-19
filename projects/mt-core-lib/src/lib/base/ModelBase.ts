export abstract class ModelBase {
  Id: any;
}

export abstract class GridModelBase extends ModelBase {
  abstract filter(phrase: string): boolean;
}
