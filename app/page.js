import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Navbar />
      <Main />
    </div>
  );
}
