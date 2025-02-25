import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.scss'
})
export class ValidationMessageComponent implements OnInit {
  @Input() public control!: FormControl;
  @Input() secondFieldName?: string;
  @Input() public array!: FormArray;
  @Input() public customName!: string;
  @Input() public customValidation!: { name: string; text: string };
  public name!: string;
  public fieldName!: string;

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.fieldName = this.customName ? this.customName : this.getControlName();

    this.name = this.translateService.instant(`fields.${this.fieldName}`);
  }

  public message(errors: ValidationErrors | null): string {
    const properties = Object.keys(errors ?? {});
    let customMessage!: boolean;

    if (this.customValidation) {
      customMessage = properties.indexOf(this.customValidation.name) > -1;
    }

    return customMessage
      ? this.customValidation.text
      : `validators.${properties[0]}`;
  }

  public getControlName(): string {
    let controlName = '';
    const parent = this.control['parent'];

    if (parent instanceof FormGroup) {
      for (const name in parent.controls) {
        if (this.control === parent.controls[name]) {
          controlName = name;
        }
      }
    }

    return controlName ?? '';
  }

  valuesForJson() {
    this.name = this.translateService.instant(`fields.${this.fieldName}`);
    const secondField = this.translateService.instant(
      `fields.${this.secondFieldName}`
    );

    return {
      field: this.name,
      length: this.getLength(),
      value: this.getValue(),
      secondField,
    };
  }

  // Covered length in Validators and RxwebValidators
  getLength() {
    return (
      this.control.errors?.['minlength']?.requiredLength ||
      this.control.errors?.['maxlength']?.requiredLength ||
      this.control.errors?.['minLength']?.refValues[1] ||
      this.control.errors?.['maxLength']?.refValues[1]
    );
  }

  getValue() {
    return (
      this.control.errors?.['min']?.min ?? this.control.errors?.['max']?.max
    );
  }
}
