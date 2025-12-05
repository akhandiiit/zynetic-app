import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import NavTabs from "../components/NavTabs";
import SideNavbar from "../components/SideNavbar";

import OverviewPanel from "../components/OverviewPanel";
import DiagnosePanel from "../components/DiagnosePanel";
import DoorStatusPanel from "../components/DoorStatusPanel";
import MCBPanel from "../components/MCBPanel";
import EmergencyStopPanel from "../components/EmergencyStopPanel";
import TemperaturePanel from "../components/TemperaturePanel";
import GunStatusPanel from "../components/GunStatusPanel";
import NotificationsPanel from "../components/NotificationsPanel";

import useChargerStatus from "../hooks/useChargerStatus";
import useNotifications from "../hooks/useNotifications";
import useDiagnostics from "../hooks/useDiagnostics";

const ChargerDigitalTwin = () => {
  const { data, loading } = useChargerStatus();
  const notifications = useNotifications();
  const { startDiagnostics, isRunning } = useDiagnostics();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060A10] text-white flex">
      <SideNavbar />
      <div className="flex-1">
        <Header />
        <Breadcrumb />
        <NavTabs />

        <div className="grid grid-cols-12 gap-6 p-6 mx-6">
          {/* LEFT */}
          <div className="col-span-3">
            <OverviewPanel data={data} />
          </div>

          {/* CENTER */}
          <div className="col-span-6 space-y-4">
            <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
                <DiagnosePanel
                startDiagnostics={startDiagnostics}
                isRunning={isRunning}
                />
            </div>
            <div className="col-span-8">
                <DoorStatusPanel />
            </div>
            </div>


            <div className="grid grid-cols-2 gap-4">
              <MCBPanel power={data.power} />
              <EmergencyStopPanel />
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
              <TemperaturePanel />
              </div>
              <div className="col-span-4">
                <GunStatusPanel />
                </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-3">
            <NotificationsPanel notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargerDigitalTwin;
