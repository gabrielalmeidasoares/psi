import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "PsicoConexão | Agenda",
  description:
    "",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
