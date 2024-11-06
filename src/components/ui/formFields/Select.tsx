// components/Select.tsx
import React from 'react';

type SelectProps = {
  label: string;
  options: string[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="text-gray-700 font-medium mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-300 rounded"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
