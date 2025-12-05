import { useState, useEffect } from "react";

const useChargerStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({
        status: "online",
        temperature: 36,
        weather: "Cloudy",
        location: "Dubai",
        health: "Good",
        power: { l1: 12.3, l2: 11.7, l3: 13.0 },
        connectivity: { wifi: true, lan: false, sim: true },
        model: "ZYNETIC DCXE",
        serialNumber: "ZYN-2024-001",
        ratedPower: "60 kW",
        connectorType: "CCS2",
        portType: "DC Fast Charge",
        installation: "Mall Parking",
        email: "support@zynetic.com",
        phone: "+971-4-123-4567",
        doorNumber: "A-42",
        energyConsumed: 1250,
        chargingStatus: "Idle",
      });
      setLoading(false);
    }, 500);
  }, []);

  return { data, loading };
};

export default useChargerStatus;
