import { useState } from "react";
import ApplianceForm from "./components/Form";

function App() {
  const [appliances, setAppliances] = useState([]);

  function addAppliance(appliance) {
    setAppliances((currentAppliances) => [
      ...currentAppliances,
      appliance,
    ]);
  }

  return (
    <main>
      <h1>⚡ PowerSaver</h1>
      <p>Save electricity. Save money.</p>

      <ApplianceForm onAddAppliance={addAppliance} />

      <h2>My Appliances</h2>

      {appliances.map((appliance) => (
        <div key={appliance.id}>
          <h3>{appliance.name}</h3>
          <p>Power: {appliance.watts}W</p>
          <p>Usage: {appliance.hours} hours/day</p>
        </div>
      ))}
    </main>
  );
}

export default App;