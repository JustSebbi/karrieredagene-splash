import SwirlingBackground from "@/components/background_line";
import LayeredBox from "@/components/layered_box";
import ShadowButton from "@/components/shadow_button";
import Image from "next/image";

export default function Home() {
  const categories = [
    { name: "Rekruttering", color: "bg-orange-300" },
    { name: "Faglig utvikling", color: "bg-yellow-300" },
    { name: "Samarbeid", color: "bg-green-400" },
    { name: "Bedriftsarrangement", color: "bg-blue-300" },
    { name: "Workshop", color: "bg-red-300" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <SwirlingBackground />
      <Image
        alt="Dotdagene logo"
        src="/logo_cropped.svg"
        className="max-w-xs lg:max-w-full"
        width={800}
        height={800}
      />
      <div className="flex flex-col items-center justify-center w-1/3 h-96 space-y-4">
        <h1 className="text-3xl">
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
        alt="Teamet som driver dotdagene"
        src="/teamet.jpg"
        width={600}
        height={600}
        className="min-w-96"
      />
      <p className="lg:w-1/2 text-xl">
        <b>dotDAGENE</b> er bedriftsdagene drevet av engasjerte studenter ved
        linjeforeningen Informatikk ved NTNU. Arrangementet vil finne sted på
        vårsemesteret, der studenter får muligheten til å møte fremtidige
        arbeidsgivere gjennom stands, workshops og sosiale arrangementer. Dette
        er en unik arena for å bygge nettverk, lære mer om bransjen – og kanskje
        finne din neste sommerjobb eller drømmearbeidsgiver!
      </p>
    </main>
  );
}
