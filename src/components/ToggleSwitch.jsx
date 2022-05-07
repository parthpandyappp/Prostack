import "../styles/toggleswitch.css";

function ToggleSwitch() {
  return (
    <div className="toggle-switch flex gap-4 items-center">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <label>Open for Collaborations</label>
    </div>
  );
}

export { ToggleSwitch };
