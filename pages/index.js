import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import SideBar from "../components/SideBar";
// import styles from '../styles/Home.module.css'
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Home() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <Head>
        <title>Home Sidebar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {open ? (
        <SideBar />
      ) : (
        <button
          className=" bg-green-500 rounded-r-lg p-3 text-white "
          onClick={() => setOpen(true)}
        >
          &gt;
        </button>
      )}
    </div>
  );
}
