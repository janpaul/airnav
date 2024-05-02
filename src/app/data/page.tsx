import { Table, type TableData } from "@mantine/core";
import { getRegions } from "@/data";
import { FlagImage, Breadcrumbs, Link } from "@/components";

const DataPage = async () => {
  const regions = getRegions();
  const tableData: TableData = {
    head: ["", "Country", "Region"],
    body: regions.map((region) => [
      <FlagImage
        key={region.regionCode}
        countryCode={region.countryCode}
        size="sm"
      />,
      <Link
        key={region.regionCode}
        href={`/data/${region.regionCode.toLowerCase()}/nav`}
        title={region.name}
      />,
      region.regionCode,
    ]),
  };
  return (
    <>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Data", href: "/data" },
        ]}
      />
      <Table striped highlightOnHover withColumnBorders data={tableData} />
    </>
  );
};

export default DataPage;
