export interface Field {
    id: string;
    dataType: string;
    inputType: string;
    label: string;
    label_fr: string;
    validators: any;
    subFields: SubField[];
    placeholder: string;
    defaultValueVariable: string;
    abstractControlType: 'formGroup' | 'formArray';
}

export interface SubField extends Field{
    showOnValue: any;
}

export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}

