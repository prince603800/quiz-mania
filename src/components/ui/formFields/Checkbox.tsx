import { Checkbox as CheckboxField} from '@headlessui/react';
import { checkedImage } from '../../../assets/images';

export default function Checkbox({label, checked, setChecked}) {
  return (
    <div className='flex items-center'>
      <CheckboxField
        checked={checked}
        onChange={setChecked}
        className="border-[2px] border-[#C2C2C2] group size-6 rounded-[50%] bg-white/10  ring-1 ring-white/15 ring-inset "
      >  
        { checked && <img src = {checkedImage} />}
      </CheckboxField>
      <p className='text-[20px] ml-1'>{label}</p>
    </div>
  );
}
