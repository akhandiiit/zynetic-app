import mainImg from "../assets/F.png";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";

const OverviewPanel = ({ data }) => (
  <div>
    <img
      src={mainImg}
      alt="main image"
      className=""
      style={{ width: "464px", height: "auto" }}
    />
    <div className="bg-slate-800 rounded-lg mx-6 p-2 mb-4 mt-1 relative flex items-center justify-between">
      <img
        src={arrowLeft}
        className="text-slate-400 cursor-pointer hover:text-white transition"
      />

      <span className="text-xs text-white absolute left-1/2 -translate-x-1/2">
        Front View
      </span>

      <img
        src={arrowRight}
        className="text-lime-400 cursor-pointer hover:text-lime-300 transition"
      />
    </div>
  </div>
);

export default OverviewPanel;
