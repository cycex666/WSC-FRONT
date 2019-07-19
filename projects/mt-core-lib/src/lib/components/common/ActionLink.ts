import { IconDef } from './IconDef';

export interface IActionLinkBase { }

export interface ActionLink extends IActionLinkBase {
  title: string;
  icon?: IconDef;
  url?: string;
  disabled?: boolean;
  childLinks?: IActionLinkBase[];
}

export interface ActionSeparator extends IActionLinkBase {

}
