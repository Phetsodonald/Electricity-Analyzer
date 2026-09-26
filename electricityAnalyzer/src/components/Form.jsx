import { useState } from "react";

function ApplianceForm({ onAddAppliance }) {
  const [name, setName] = useState("");
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("30");

  function handleSubmit(event) {
    event.preventDefault();

    const appliance = {
      id: Date.now(),
      name,
      watts: Number(watts),
      hours: Number(hours),
      days: Number(days),
    };

    onAddAppliance(appliance);

    setName("");
    setWatts("");
    setHours("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Appliance</h2>

      <label>
        Appliance name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Heater"
          required
        />
      </label>

      <label>
        Power (watts)
        <input
          type="number"
          value={watts}
          onChange={(event) => setWatts(event.target.value)}
          placeholder="e.g. 2000"
          min="1"
          required
        />
      </label>

      <label>
        Hours per day
        <input
          type="number"
          value={hours}
          onChange={(event) => setHours(event.target.value)}
          placeholder="e.g. 4"
          min="0"
          step="0.5"
          required
        />
      </label>

      <label>
        Days per month
        <input
          type="number"
          value={days}
          onChange={(event) => setDays(event.target.value)}
          min="1"
          max="31"
          required
        />
      </label>

      <button type="submit">Add Appliance</button>
    </form>
  );
}

export default ApplianceForm;