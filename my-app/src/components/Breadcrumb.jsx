import arrowDown from "../assets/arrow_down.svg";
import add from "../assets/add.svg";
import evStation from "../assets/ev_station.svg";

export default function Breadcrumb() {
  return (
    <div
      className="mx-6 px-6 py-1 rounded-t-2xl flex items-center justify-between"
      style={{ backgroundColor: "#15172780" }}
    >
      <div className="flex gap-3 text-left items-center">
        <span className="text-white text-lg cursor-pointer">←</span>
        <img
          src={evStation}
          alt="Ev station"
          style={{ width: "22px", height: "22px" }}
        />
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-white tracking-wide">ZYNIND001</span>
          <span className="text-xs text-slate-400 text-[10px]">
            80 kW — Dual Gun
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 mr-8">
        <div className="flex items-center gap-2 bg-white/10 rounded-xs border border-white/20 px-4 py-2  transition">
          <img
            src={add}
            alt="Add charger"
            style={{ height: "16px", width: "17px" }}
          />
          <span className="text-sm text-slate-300 font-medium text-[12px]">
            Add Charger
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 rounded-xs border border-white/20 px-2 py-2  transition">
          <img
            src={arrowDown}
            alt="Expand"
            style={{ height: "16px", width: "17px" }}
          />
        </div>
      </div>
    </div>
  );
}
