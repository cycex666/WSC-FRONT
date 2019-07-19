import { Component, OnInit, Input } from "@angular/core";
import { IFormInputElement } from "../../IFormInputElement";
import { BaseFormInputElement } from "../abstracts/BaseFormInputElement";

@Component({
  selector: "lea-checkbox-input",
  templateUrl: "./checkbox-input.component.html",
  styleUrls: ["./checkbox-input.component.css"]
})
export class CheckboxInputComponent extends BaseFormInputElement {
  ngOnInit() {}
}
