export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--background-default': '#F4FAFF',
    '--primary-default': '#000000',
    '--popup-button': '#0cfdba',
    '--popup-button-color': '#000000',
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-default': '#797C80',
    '--primary-default': '#ffffff',
    '--primary-button' : '#046147',
    '--popup-button-color': '#ffffff',
  }
};
