import React from "react";
import Image from 'next/image'
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between mt-5 items-center h-auto">
    <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
    </div>
      <Image 
      className="object-contain"
      src="https://links.papareact.com/ua6" width={200} height={100} alt="header-pic"/>
    </header>
  );
};

export default Header;