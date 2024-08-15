import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [rfidData, setRfidData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://172.16.12.26:1880/ws/data'); // ใช้ URL ของ WebSocket ที่ตั้งใน Node-RED

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRfidData(data);
    };

    return () => {
      ws.close(); // ปิดการเชื่อมต่อเมื่อคอมโพเนนต์ถูก unmount
    };
  }, []);

  return (
    <div>
      {rfidData ? (
        <div>
          <p>RFID: {rfidData.rfid}</p>
          <p>Timestamp: {rfidData.timestamp}</p>
        </div>
      ) : (
        <p>Waiting for RFID data...</p>
      )}
    </div>
  );
};

export default WebSocketComponent;
