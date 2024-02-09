import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title:
    "PsicoConexão",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
        
      </DefaultLayout>
    </>
  );
}
