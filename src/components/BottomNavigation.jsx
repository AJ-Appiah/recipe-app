import { BookmarkIcon, HeartIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"

const BottomNavigation = () => {
  return (
    <div className="flex flex-row justify-evenly h-[96px] items-center fixed bottom-0 w-full bg-[#D9D9D9]">
       <NavLink to="/recipes"> 
        <HomeIcon className="size-[24px]"/>
       </NavLink>

       <NavLink to="/categories"> 
        <BookmarkIcon className="size-[24px]"/>
       </NavLink>

       <NavLink to="/favorites"> 
        <HeartIcon className="size-[24px]"/>
       </NavLink>

       <NavLink to="/recipes/new"> 
        <PlusIcon className="size-[24px]"/>
       </NavLink>
    </div>
  )
}

export default BottomNavigation