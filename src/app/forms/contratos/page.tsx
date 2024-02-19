import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "../../../components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "PsicoConexão | Contratos",
  description:
    "",
};

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Contratos" />

      
    </DefaultLayout>
  );
};

export default FormLayout;
