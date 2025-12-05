import logo from "../assets/logo.png";
import sb1 from "../assets/sb1.png";
import sb2 from "../assets/sb2.png";
import sb3 from "../assets/sb3.png";
import sb4 from "../assets/sb4.png";
import sb5 from "../assets/sb5.png";
import sb6 from "../assets/sb6.png";
import sb7 from "../assets/sb7.png";
import profile from "../assets/profile.png";

export default function SideNavbar() {
  const menu = [
    { id: 1, icon: sb1, active: false },
    { id: 2, icon: sb2, active: true }, // Active Item
    { id: 3, icon: sb3, active: false },
    { id: 4, icon: sb4, active: false },
    { id: 5, icon: sb5, active: false },
    { id: 6, icon: sb6, active: false },
    { id: 7, icon: sb7, active: false },
  ];

  return (
    <aside className="bg-slate-900 h-screen w-18 flex flex-col justify-between items-center border-r border-slate-800" style={{height:"780px"}}>
      {/* Top section */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="object-contain mb-6"
          style={{ width: "99px", height: "auto" }}
        />

        {menu.map((item) => (
          <div
            key={item.id}
            className={`ps-3 mb-4 cursor-pointer transition ${
              item.active ? "text-lime-400" : "text-slate-500 hover:text-white"
            }`}
          >
            <img
              src={item.icon}
              alt="icon"
              className="object-contain"
              style={{ width: "50px", height: "auto" }}
            />
          </div>
        ))}
      </div>

      <div className="w-full border-t border-slate-700 flex justify-center py-4 pb-10">
        <img
          src={profile}
          alt="Profile"
          className="object-contain ms-2"
          style={{ width: "50px", height: "auto" }}
        />
      </div>
    </aside>
  );
}
