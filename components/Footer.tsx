import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <div className='flex gap-4'>
        <a href="https://github.com/Tosha24" target='_blank' className='text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <span><TbBrandGithub/></span>
        </a>
        <a href="https://www.linkedin.com/in/tosha24/" target='_blank' 
        className='text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <span><SlSocialLinkedin/></span>
        </a>
        <a href="https://leetcode.com/Tosha24/" target='_blank'
        className='text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <span><SiLeetcode/></span>
        </a>
        <a href="https://www.hackerrank.com/toshapatel179?hr_r=1" target='_blank'
        className='text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <span><SiHackerrank/></span>
        </a>
      </div>
    </div>
  )
}

export default Footer;