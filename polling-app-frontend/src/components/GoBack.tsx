import { Link } from "react-router-dom";
import { BackIcon } from "./icons";

export function GoBack() {
  return (
    <Link
      to="/"
      className="flex text-sm items-center underline mb-4 hover:text-blue-600"
      viewTransition
    >
      <BackIcon height={16} width={16} />
      Back to list
    </Link>
  )
}