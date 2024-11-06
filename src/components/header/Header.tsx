import { logo } from '../../assets/images';


const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center border-b-[1px] border-b-[#D9D9D9]">
      <img className='ml-12' src={logo}/>
    </div>
  );
};

export default Header;
