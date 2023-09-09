export interface Field {
    id: string;
    abstractControlType?: 'formControl' | 'formGroup' | 'formArray';
    dataType: RequiredFieldDataType;
    inputType: RequiredFieldInputType;
    label: string;
    label_fr: string;
    validators: FieldValidators;
    placeholder?: string;
    // Fields that should be added conditionally based on the value of the parent field
    subFields: SubField[];
    // Show the field if the value of the parent field matches the value of showOnValue
    options?: {
        label: string;
        value: string;
    }[];
    defaultValue?: string;
    defaultValueVariable: string;
    // Use in conjunction with abstractControlType = 'formGroup' to specify what controls the formGroup will contain
    controls?: Field[];
    controlName?: string;
    // Use in conjunction with abstractControlType = 'formArray' to specify what type of abstractControl the formArray will contain
    arrayItemType?: Field;
    // The label of the button to add a new item to the formArray
    addButtonLabel?: string;
}

export interface SubField extends Field{
    showOnValue: any;
}

export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}

export type RequiredFieldDataType =
| 'number'
|  'text'
|  'email'
|  'password'
|  'date'
|  'boolean'
|  'file'
|  'select'
|  'multiselect';

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

