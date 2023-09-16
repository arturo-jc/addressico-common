export interface Field {
    id: string;
    abstractControlType: AbstractControlType;
    dataType: RequiredFieldDataType;
    inputType: RequiredFieldInputType;
    label: string;
    label_fr: string;
    validators: FieldValidators;
    placeholder?: string;
    subFields: Field[];
    options?: {
        label: string;
        value: string | boolean;
    }[];
    defaultValue?: string;
    defaultValueVariable?: string;
    controls?: Control[];
    arrayItemType?: Control;
    addButtonLabel?: string;
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
export type RequiredFieldDataType = 'number' | 'text' | 'email' | 'password' | 'phone' | 'date' | 'boolean' | 'file' | 'select' | 'multiselect' | 'object' | 'array';
export type RequiredFieldInputType = 'inputText' | 'inputNumber' | 'calendar' | 'dropdown' | 'checkbox' | 'radioButton' | 'multiselect' | 'textarea' | 'phone' | 'form' | 'formArray';
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
//# sourceMappingURL=fields.model.d.ts.map