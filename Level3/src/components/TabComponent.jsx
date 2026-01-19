import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab(1)}>Tab 1</button>
        <button onClick={() => setActiveTab(2)}>Tab 2</button>
        <button onClick={() => setActiveTab(3)}>Tab 3</button>
      </div>

      <div>
        {activeTab === 1 && <p>This is tab one content.</p>}
        {activeTab === 2 && <p>This is tab two content.</p>}
        {activeTab === 3 && <p>This is tab three content.</p>}
      </div>
    </div>
  );
};

export default TabComponent;
