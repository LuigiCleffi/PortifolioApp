export type Header<T> = {
  key: T;
  label: string;
  options?: {
    values: {
      label?: string;
      value: number | string;
    }[];
    hasMultipleTabs?: boolean;
    isMultiple?: boolean;
    emptyLabel?: string;
    defaultValueIndex?: number;
  };
  placeholder?: string;
  helperText?: string;
};
