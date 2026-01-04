import DomainLinkElement from "./domainelement";

interface Domain {
  domainName: string;
  domainLink: string;
  description: string;
}

export default function Home() {
  const domains: Domain[] = [
    {
      domainName: "catordog",
      domainLink: "catordog.ronitsingh.tech",
      description: "A game to choose between cats and dogs"
    },
    {
      domainName: "dir",
      domainLink: "dir.ronitsingh.tech",
      description: "A game to choose between cats and dogs"
    },
  ];
  return <>
    <section className="flex flex-col justify-center items-center w-screen h-screen bg-black">
      <section className="flex flex-col border border-gray-40 border-2 rounded text-white p-25 py-10 overflow-y-auto">
         {domains.map((domain, index) => (
          <div key={index}>
            <DomainLinkElement domainName={domain.domainName} domainLink={domain.domainLink} description={domain.description}/> {index < domains.length - 1 && (<hr className="border-gray-600 my-4"></hr>)}
          </div>
         ))}
      </section>
    </section>
  </>;
}
