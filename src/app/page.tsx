import { IntroductionImage, IntroductionText } from "@/components/introduction";
export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-gray-900 min-h-screen">
      <div className="text-white text-6xl text-center">About me</div>
      <div className="flex items-center justify-between m-6">
        <IntroductionText />
        <IntroductionImage />
      </div>
    </div>
  );
}
