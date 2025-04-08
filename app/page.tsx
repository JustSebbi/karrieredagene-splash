import SwirlingBackground from "@/components/background_line";
import ShadowButton from "@/components/shadow_button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SwirlingBackground />
      <div className="flex flex-col items-center justify-center w-1/3">
        <p className="text-5xl">
          Helt nye karrieredager på NTNU fra <b>våren 2026</b>
        </p>
        <p className="text-4xl mt-4 mb-5">
          <i>Interessert?</i>
        </p>
        <ShadowButton />
      </div>
    </main>
  );
}
