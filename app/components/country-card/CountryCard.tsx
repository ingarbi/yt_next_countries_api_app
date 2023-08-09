import Link from "next/link";
import Image from "next/image";

export default function CountryCard({
  name,
  rusName,
  flag,
  flagAlt,
}: {
  name: string;
  rusName: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link href={`/country/${name}`}>
      <article
        className="h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl "
        key={name}
      >
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image
            src={flag}
            alt={flagAlt}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="font-bold text-xl text-center mt-1">
          {rusName}
        </h1>
      </article>
    </Link>
  );
}
