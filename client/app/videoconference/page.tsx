
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/dashLayout";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ShowWorkPage from "../workout/page";
export const metadata: Metadata = {
    title: "FitnessHub",
    description:
      "Welcome to fitnessHub",
  };
export default function VideoConf(){
    return(
        <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Workout Regimens" />
        {/* <> */}
        {/* <h1>Workout Regimens</h1> */}
        {/* <div style={{
            // top: "20px"

        }}> */}
        <div style={{
          top: "20px",
        }}>
          <ShowWorkPage/>
        </div>
        {/* <div/> */}
        {/* </> */}
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
  <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
</svg> */}
        </DefaultLayout>
    )
}