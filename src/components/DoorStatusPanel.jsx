import door from "../assets/door_sliding.svg";
import doorClose from "../assets/door_sliding_close.svg";

const DoorStatusPanel = () => (
  <div className="bg-slate-900 h-full rounded-lg p-4">
    <h3 className="">
      Door Status <span className="text-lime-400">●</span>
    </h3>
    <p className="text-xs text-slate-400">Status of charger doors</p>
    <div className="grid grid-cols-3 text-center mt-3">
      {[
        ["FRONT DOOR", "Closed", "text-white"],
        ["LEFT DOOR", "Closed", "text-white"],
        ["RIGHT DOOR", "Open", "text-orange-400"],
      ].map(([label, status, color], i) => (
        <div
          key={i}
          className={`text-center relative p-2 ${
            i < 2 ? "border-gradient-right" : ""
          }`}
        >
          <div className="text-xs text-slate-400 mb-2">{label}</div>
          <div
            className={`flex items-center justify-center text-md font-bold ${color}`}
          >
            {status === "Closed" ? (
              <img src={doorClose} className="mr-2" />
            ) : (
              <img src={door} className="mr-2" />
            )}
            {status}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DoorStatusPanel;
