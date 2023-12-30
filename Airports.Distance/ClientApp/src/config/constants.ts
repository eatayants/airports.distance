import type { AnchorHTMLAttributes } from 'react';
import type { Theme } from 'react-functional-select';


export type SelectOption = Readonly<{
    value: number;
    label: string;
}>;

export const padLeft = (number: string, length: number, character: string = '0'): string => {
    let result = String(number);
    for (let i = result.length; i < length; ++i) {
        result = character + result;
    }
    return result;
};

export const chunkSize:number = 25000;

export const THEME_CONFIG: Theme = {
    color: {
        primary: '#09d3ac'
    },
    control: {
        boxShadowColor: 'rgba(9, 211, 172, 0.25)',
        focusedBorderColor: 'rgba(9, 211, 172, 0.75)'
    },
    menu: {
        option: {
            selectedColor: '#fff',
            selectedBgColor: '#09d3ac',
            focusedBgColor: 'rgba(9, 211, 172, 0.225)'
        }
    }
};

export const NUGET_URL_CONFIG = {
    SwaggerDocs: 'http://localhost:52530/swagger'
};

export const LINK_ATTRIBUTES: AnchorHTMLAttributes<HTMLAnchorElement> = {
    role: 'button',
    target: '_blank',
    rel: 'noopener noreferrer'
};