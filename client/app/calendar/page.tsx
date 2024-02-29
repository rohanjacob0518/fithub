
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ShowCalendar from "@/components/Calendar/page";
import DefaultLayout from "@/components/Layouts/dashLayout";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitnessHub",
  description:
    "Welcome to fitnessHub",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
              {/* <Breadcrumb pageName="Settings" /> */}
      <Breadcrumb pageName="Calendar" />

      {/* <ShowCalendar/> */}

      Coming soon
    </DefaultLayout>
  );
};

export default CalendarPage;
