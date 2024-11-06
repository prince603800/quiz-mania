// components/Input.tsx
import {
  Field,
  Label,
  Input as InputField,
} from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

type InputProps = {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <>
    <div className="w-full">
      <Field>
        <Label className="text-[16px] font-normal text-secondary">{label}</Label>
        <InputField
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            'mt-1 block w-full h-[56px] rounded-lg border-[1px] border-[#D9D9D9] bg-white/5 py-1.5 px-3 text-sm/6 text-secondary',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          )}
        />
      </Field>
    </div>
  </>
);

export default Input;
