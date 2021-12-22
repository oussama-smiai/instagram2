import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";
function Header() {
    return (
        <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid h-24 w-24 
        cursor-pointer">
            <Image 
                src='https://bit.ly/3H4i8BH' layout="fill"
                objectFit="contain"
            />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0
        cursor-pointer">
            <Image 
                src='https://bit.ly/32gcttu' layout="fill"
                objectFit="contain"
            />
        </div>


        {/* middle */}
        <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center
            pointer-events-none">
                <SearchIcon className="h5 w5 text-grey-500" />
            </div> 
            <input 
             className="bg-grey-50 block w-full pl-10
             sm:text-sm border-gray focus:ring-black 
             focus:border-black rounded-md"
             type="text" 
             palceHolder="Search"
            />
        </div>

        {/* right */}
        </div>
    
    )
}
export default Header