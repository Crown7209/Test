import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black h-screen flex">
      <Scene />
    </main>
  );
}
