import Plug from "../assets/plug.png";

const GunStatusPanel = () => (
  <div className="bg-slate-900 rounded-lg p-4 h-full flex flex-col justify-between">
    
    {/* Title */}
    <div>
      <h3 className=" text-white ">Gun Status</h3>
      <p className="text-xs text-slate-400">Gun Armed/Charging Status</p>
    </div>

    {/* Gun Status Items */}
    <div className="space-y-10 mt-6">
      
      {/* GUN 1 */}
      <div className="flex items-center gap-4">
        <div className="border border-slate-500 p-2 rounded-lg">
         <img src={Plug} style={{height:"15px", width:"15px"}}/>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-400">GUN 1</span>
          <span className="text-sm text-white tracking-wide">
            ARMED
          </span>
        </div>
      </div>

      {/* GUN 2 */}
      <div className="flex items-center gap-4">
        <div className="border border-slate-500 p-2 rounded-lg">
             <img src={Plug} style={{height:"15px", width:"15px"}}/>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-400">GUN 2</span>
          <span className="text-sm text-lime-400 tracking-wide">
            Charging
          </span>
        </div>
      </div>

    </div>
  </div>
);

export default GunStatusPanel;
