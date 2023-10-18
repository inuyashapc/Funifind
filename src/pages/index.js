import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import LayoutAdmin from "@/layouts/layoutAdmin";
export default function Home() {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="flex mt-4">
        <Sidebar />
        <h4>Only admins have permission to view</h4>
      </div>
      <Footer />
    </>
  );
}
