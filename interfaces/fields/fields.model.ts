export interface Field {
    id: string;
    abstractControlType: AbstractControlType;
    dataType: RequiredFieldDataType;
    inputType: RequiredFieldInputType;
    label: string;
    label_fr: string;
    validators: FieldValidators;
    placeholder?: string;
    // Fields that should be added conditionally based on the value of the parent field
    subFields: Field[];
    options?: {
        label: string;
        value: string | boolean;
    }[];
    defaultValue?: string;
    defaultValueVariable?: string;
    // Use in conjunction with abstractControlType = 'formGroup' to specify what controls the formGroup will contain
    controls?: Control[];
    // Use in conjunction with abstractControlType = 'formArray' to specify what type of abstractControl the formArray will contain
    arrayItemType?: Control;
    // The label of the button to add a new item to the formArray
    addButtonLabel?: string;
    // Show the field if the value of the parent field matches the value of showOnValue
    showOnValue?: any;
}

export type AbstractControlType = 'formControl' | 'formGroup' | 'formArray';

export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}

export interface Control extends Omit<Field, 'id' | 'subFields'> {
    controlName: string;
}

export type RequiredFieldDataType =
|  'number'
|  'text'
|  'email'
|  'password'
|  'phone'
|  'date'
|  'boolean'
|  'file'
|  'select'
|  'multiselect'
|  'object'
|  'array';

export type RequiredFieldInputType =
| 'inputText'
|  'inputNumber'
|  'calendar'
|  'dropdown'
|  'checkbox'
|  'radioButton'
|  'multiselect'
|  'textarea'
|  'phone'
|  'form'
|  'formArray'
;

export interface FieldValidators {
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

