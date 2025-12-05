const DiagnosePanel = ({ startDiagnostics, isRunning }) => (
  <div className="bg-slate-900 h-full rounded-lg p-4">
    <div className="">
      <div>
        <h3 className="">Diagnose Charger</h3>
        <p className="text-xs text-slate-400">Scan to start diagnosis</p>
      </div>
      <div
        onClick={startDiagnostics}
        disabled={isRunning}
        className="w-full cursor-pointer text-center py-2 rounded-xs text-black mt-6 transition disabled:opacity-50"
        style={{ backgroundColor: "#a3e635" }}
      >
        {isRunning ? "Scanning..." : "Scan"}
      </div>
    </div>
  </div>
);

export default DiagnosePanel;
