import { Spacer } from "./spacer";

export function Divider({ className = "" }) {
  return <hr className={`divider ${className}`} />;
}

export function HRSpacer() {
  return (
    <div>
      <Spacer />
      <Divider />
      <Spacer />
    </div>
  );
}
