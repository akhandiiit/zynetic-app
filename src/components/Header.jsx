import ChevronDown from '../assets/expand_more.png';
import Search from '../assets/search.svg'
import Bell from '../assets/bell.svg'
import HelpCircle from '../assets/help.svg'
import Plus from '../assets/add2.svg'
import Filter from '../assets/filter.svg'
import home from "../assets/home.png";
export default function Header() {
  return (
    <header className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>
              <img
                src={home}
                alt="home"
                style={{ width: "15px", height: "15px" }}
              />
            </span>
            <span>›</span>
            <span className="text-xs">Charger Management</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Vendor Select */}
          <div className="relative">
            <select
              className="bg-[#000] text-white pl-4 pr-10 py-2 rounded-md 
                     appearance-none cursor-pointer w-32 shadow-sm"
            >
              <option>Vendor</option>
            </select>
            <img src={ChevronDown}  style={{height:"20px"}}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              
            />
            
          </div>

          {/* Search Bar + All Dropdown */}
          <div className="flex items-center bg-[#23344D80] text-white rounded-md px-4 pr-10 py-2 shadow-md gap-3 w-80">
            <img src={Search}  className="text-white opacity-70" />
            <input
              type="text"
              placeholder="Charger/Hub"
              className="bg-transparent w-full outline-none placeholder-white/70"
            />
            {/* All Dropdown */}
            <div className="relative cursor-pointer">
              <span className="text-white/80">All</span>
              <img src={ChevronDown}
                 style={{height:"20px"}}
                className="absolute -right-6 top-1/2 -translate-y-1/2 text-white/80"
              />
            </div>
          </div>

          {/* Filter Button */}
          <div className="bg-[#000] flex items-center justify-center gap-2 text-white py-2 px-5 rounded-sm shadow-sm cursor-pointer hover:bg-[#7a7f90]">
            <img src={Filter}  style={{height:"22px"}} />
            <span className="text-sm font-medium">Filter</span>
          </div>

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <img src={Bell}  style={{height:"24px"}}  className="text-white/70 hover:text-white" />
            {/* Blue dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>

          {/* Help Icon */}
          <img src={HelpCircle}
            style={{height:"24px"}}
            className="text-white/60 hover:text-white cursor-pointer"
          />

          {/* Green Add Button */}
          <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
            <img src={Plus} style={{height:"24px"}}  className="p-1 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
