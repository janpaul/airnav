import { Table, Title, type TableData } from "@mantine/core";
import type { Navaid } from "@/model";
import { getNavData, getRegion } from "@/data";
import { displayFrequency, getNavAidType } from "@/lib";
import { Breadcrumbs, FlagImage } from "@/components";

const getData = async (region: string, type: string): Promise<Navaid[]> => {
  return getNavData(region);
};

type Props = {
  params: { region: string; type: string };
};
const DataRegionTypePage = async ({ params: { region, type } }: Props) => {
  const data = await getData(region, type);
  const fregion = await getRegion(region);
  const tableData: TableData = {
    caption: "Navigation data",
    head: [
      "Ident",
      "Name",
      "Type",
      "Channel",
      "Frequency",
      "Range (nm)",
      "Elevation (ft)",
    ],
    body: data.map((navAid) => [
      navAid.ident,
      navAid.name,
      getNavAidType(navAid),
      navAid.channel ?? "-",
      navAid.frequency ? displayFrequency(navAid.frequency) : "-",
      navAid.range,
      navAid.elevation,
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
      {fregion && (
        <Title
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <FlagImage countryCode={fregion.countryCode} size="lg" />
          {fregion.name}
        </Title>
      )}
      <Table striped highlightOnHover withColumnBorders data={tableData} />
    </>
  );
};

export default DataRegionTypePage;
