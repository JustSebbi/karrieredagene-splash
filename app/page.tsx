import SwirlingBackground from "@/components/background_line";
import LayeredBox from "@/components/layered_box";
import ShadowButton from "@/components/shadow_button";
import Image from "next/image";

export default function Home() {
  const categories = [
    { name: "Kurs", color: "bg-red-300" },
    { name: "Rekruttering", color: "bg-orange-300" },
    { name: "Faglig utvikling", color: "bg-yellow-300" },
    { name: "Samarbeid", color: "bg-green-400" },
    { name: "Bedpress", color: "bg-blue-300" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <SwirlingBackground />
      <div className="flex flex-col items-center justify-center w-1/3 h-screen">
        <h1 className="text-5xl">
          Helt nye karrieredager på NTNU fra <b>våren 2026</b>
        </h1>
        <p className="text-4xl mt-4 mb-5">
          <i>Interessert?</i>
        </p>
        <ShadowButton />
      </div>
      <h1 className="text-5xl">
        Hva kan vi <b>tilby</b>?
      </h1>
      <div className="flex items-center justify-center gap-2 flex-col">
        {categories.map((category, index) => (
          <LayeredBox bgColor={category.color} key={index}>
            {category.name}
          </LayeredBox>
        ))}
      </div>
      <h1 className="text-5xl">
        Hvem er <b>vi</b>?
      </h1>
      <Image
        alt="teamet som koser seg i solnedgangen"
        src="/team.jpg"
        width={600}
        height={600}
      />
      <p className="lg:w-1/2 text-center text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi,
        aliquam commodi quisquam nemo eius neque! Voluptatibus sapiente eius
        voluptas cupiditate dolore officiis cum quam sunt. Ipsum corrupti
        accusamus cupiditate!
      </p>
    </main>
  );
}
