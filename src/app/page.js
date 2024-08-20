import Image from "next/image";
import AddEmployees from "./components/AddEmployees";
import ShowEmployees from "./components/ShowEmployees";

export default function Home() {
  return (
    <>
      <AddEmployees/>
      <br/>
      <ShowEmployees/>
    </>
  );
}
