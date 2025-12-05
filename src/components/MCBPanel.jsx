import RedMCB from "../assets/red-mcb.png";
import TripMCB from "../assets/grey-mcb.png";
import BlueMCB from "../assets/blue-mcb.png";

const MCBPanel = ({ power }) => {
  const brackets = [
    { label: "L1", img: RedMCB, voltage: "1000 V", amp: "60 A" },
    { label: "L2", img: TripMCB, voltage: "1000 V", amp: "60 A" },
    { label: "L3", img: BlueMCB, voltage: "1000 V", amp: "60 A" },
  ];

  return (
    <div className="bg-slate-900 rounded-lg p-4 flex flex-col h-full">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-white">MCB</h3>
        <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">

        {/* LEFT SIDE DATA COLUMN */}
        <div className="col-span-6 space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">kWh</span>
            <span className="text-white">{power?.l1 || 62} kWh</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Hz</span>
            <span className="text-white">60 Hz</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">PF</span>
            <span className="text-white">0.8 PF</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Earthing</span>
            <span className="text-white">Earthing</span>
          </div>
        </div>

        {/* RIGHT SIDE MCB IMAGES COLUMN */}
        <div className="col-span-6 grid grid-cols-3 text-center gap-3">

          {brackets.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-xs text-[10px]">
              
              {/* Label above image */}
              <span className="text-slate-400 mb-2 text-[10px]">{item.label}</span>

              {/* MCB Image */}
              <img
                src={item.img}
                alt={item.label}
                className="h-16 object-contain mb-1"
              />

              {/* Voltage + Current */}
              <div className="text-white text-[10px] leading-tight mt-1">
                <p>{item.voltage}</p>
                <p>{item.amp}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MCBPanel;
