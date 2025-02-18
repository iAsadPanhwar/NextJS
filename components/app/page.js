import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5 size-80 bg-red-300">
      <Image width={700} height={700} className="mx-auto" src="data:image/jpeg;base64,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" alt="" />
      I am home</div>
  );
}
