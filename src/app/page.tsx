import { IconMap2, IconTableRow } from "@tabler/icons-react";
import { Link } from "@/components";

const Home = () => {
  return (
    <main>
      <Link href="/data" title="Data" icon={IconTableRow} />
      <Link href="/map" title="Map" icon={IconMap2} disabled />
    </main>
  );
};

export default Home;
