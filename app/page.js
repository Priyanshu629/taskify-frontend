"use client";
import HomeContent from "./components/HomeContent";
import useCheck from "./hooks/useCheck";

export default function Home() {
  useCheck();

  return <HomeContent />;
}
