export default function PanelResizer({ onMouseDown }) {
  return (
    <div
      onMouseDown={onMouseDown}
      className="app__divider"
    />
  );
}