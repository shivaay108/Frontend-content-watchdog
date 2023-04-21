import Link from "next/link";
import React from "react";
import Logo from "./Logo";


const CustomLink=({href,title,className=""})=>{
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* <span className="h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full">&nbsp;</span> */}
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className=" bg-dark w-full px-8 py-4 text-lg text-white	 font-medium flex items-center justify-between">
      <Logo/>
      <nav>
        <CustomLink href="/" title="Home" className="mr-6"/>
        <CustomLink href="/pricing" title="Pricing" className="mx-6"/>
        <CustomLink href="/contact" title="Contact" className="mx-6"/>
        <CustomLink href="/login" title="Login" className="ml-6"/>
       
      </nav>
      
     
      <nav><CustomLink href="/" title="Get Started" className="px-2 py-4 rounded-full border border-2 border-white hover:border-black hover:bg-white hover:text-black"></CustomLink></nav>
      
    </header>
  );
};

export default NavBar;
