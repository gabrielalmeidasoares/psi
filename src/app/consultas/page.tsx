import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "../../components/Tables/TableOne";
import TableThree from "../../components/Tables/TableThree";


import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Consultas",
  description:
    "",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Consultas" />

      <div className="flex flex-col gap-10">
        
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
