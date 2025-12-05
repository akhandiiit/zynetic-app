const EmergencyStopPanel = () => (
  <div className="bg-slate-900 rounded-lg p-4 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-white">Emergency stop</h3>
      <p className="text-xs text-slate-400">Emergency Stop Status</p>
    </div>

    <div className="flex flex-col items-end">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-4 h-4 bg-white rounded-full border-4 border-slate-600"></div>
        <span className="text-xs tracking-wide text-slate-400">
          STOP BUTTON
        </span>
      </div>

      <span className="text-base font-semibold text-white">Not Engaged</span>
    </div>
  </div>
);

export default EmergencyStopPanel;
