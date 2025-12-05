import Thermometer from '../assets/device_thermostat.svg';
import Droplets from "../assets/humidity_low.svg";
import Gun from '../assets/gun.svg'
import Fuel from '../assets/charger.svg'

const TemperaturePanel = () => {
  const items = [
    {
      icon: Thermometer,
      label: "EXTERNAL",
      value: "37°",
      sub: "C",
    },
    {
      icon: Fuel,
      label: "CHARGER",
      value: "42°",
      sub: "C",
    },
    {
      icon: Gun,
      label: "GUN 1",
      value: "29°",
      sub: "C",
    },
    {
      icon: Droplets,
      label: "HUMIDITY",
      value: "30",
      sub: "%",
    },
    {
      icon: Droplets,
      label: "HUMIDITY",
      value: "34",
      sub: "%",
    },
    
    {
      icon: Gun,
      label: "GUN 2",
      value: "39°",
      sub: "C",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-lg p-4 h-full flex flex-col justify-between">
      {/* Title Section */}
      <div className="">
        <h3 className=" text-white ">Temperature</h3>
        <p className="text-sm text-slate-400 mt-1">
          Temperature and Humidity in and around Charger
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-4 text-center">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex gap-3 text-left">
              {/* Icon Left */}
              <img src={Icon} className="text-slate-300" style={{height:"20px"}} />

              {/* Text Right */}
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-slate-400">{item.label}</span>
                <span className="text-lg text-white">
                  {item.value}<span className="text-[10px] text-slate-400">{item.sub}</span>
                </span>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemperaturePanel;
