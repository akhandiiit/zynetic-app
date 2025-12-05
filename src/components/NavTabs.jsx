// import { Info, Zap, AlertTriangle, Bell, Settings, Wrench } from "lucide-react";
import Tn1 from '../assets/tn1.svg'
import Tn2 from '../assets/tn2.svg'
import Tn3 from '../assets/tn3.svg'
import Tn4 from '../assets/tn4.svg'
import Tn5 from '../assets/tn5.svg'
import Tn6 from '../assets/tn6.svg'


export default function NavTabs() {
  const tabs = [
    { id: 1, label: "Info", icon: Tn1, active: false },
    { id: 2, label: "Digital Twin", icon: Tn2, active: true },
    { id: 3, label: "Fault", icon: Tn3, active: false },
    { id: 4, label: "Alarm", icon: Tn4, active: false },
    { id: 5, label: "Configuration", icon: Tn5, active: false },
    { id: 6, label: "Maintenance", icon: Tn6, active: false },
  ];

  return (
    <div className="px-6 border-b border-slate-800 mx-12" >
      <div className="flex justify-between items-center text-xs pt-4">

        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <div
              key={tab.id}
              className={`flex items-center gap-2 cursor-pointer pb-2 px-5 border-b-2 transition ${
                tab.active
                  ? "text-lime-400 border-lime-400"
                  : "text-slate-400 border-transparent hover:text-white hover:border-slate-600"
              }`}
            >
              <img src={IconComponent} style={{height:"14px"}} />
              <span className="text-xs font-medium whitespace-nowrap">
                {tab.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}
