import { BsSlashCircle } from "react-icons/bs";

export default function GreyCancel() {
  return (
    <span className="me-1 position-relative">
      <BsSlashCircle style={{ top: "2px" }}
        className="text-secondary me-1 position-absolute fs-5" />

    </span>
  );
}