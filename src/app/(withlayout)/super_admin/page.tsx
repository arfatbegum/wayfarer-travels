import { redirect } from "next/navigation";

const SuperAdmin = () => {
  return redirect("/super_admin/profile");
};

export default SuperAdmin;