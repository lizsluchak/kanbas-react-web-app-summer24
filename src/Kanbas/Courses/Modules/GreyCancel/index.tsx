import { BsSlashCircle } from "react-icons/bs";

export default function GreyCancel() {
  return (
    <span className="me-2 position-relative">
      <BsSlashCircle style={{ top: "2px" }}
        className="text-secondary me-2 position-absolute fs-6" />

    </span>
  );
}