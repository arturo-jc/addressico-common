export const AJV_STRING_SHORT = {
    type: 'string',
    maxLength: 255,
} as const;

export const AJV_STRING_LONG = {
    type: 'string',
    maxLength: 1024,
} as const;

export const AJV_BOOLEAN = {
    type: 'boolean',
} as const;

export const AJV_NUMBER = {
    type: 'number',
} as const;