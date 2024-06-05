import AddClientMOdal from "../components/AddClientMOdal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientMOdal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
