import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        {
      domainName: "dir",
      domainLink: "dir.ronitsingh.tech",
      description: "A game to choose between cats and dogs"
    },
  ];
return (
    <>
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-black min-w-min">
        <section className="w-full max-w-4xl border border-gray-400 rounded-lg text-white p-6 md:p-10 overflow-y-auto">
          
          <Accordion type="multiple" className="block md:hidden mx-4 ">
            {domains.map((domain, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {domain.domainName}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-3 pt-2">
                    <a
                      href={`https://${domain.domainLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all text-blue-400"
                    >
                      {domain.domainLink}
                    </a>
                    <p className="text-sm text-gray-300">{domain.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
          <div className="hidden md:flex md:flex-col gap-4 overflow-y-auto max-h-96">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-4 lg:gap-8 items-start pb-4 ${
                  index < domains.length - 1 ? 'border-b border-gray-600' : ''
                }`}
              >
                <p className="w-full lg:w-40 font-medium shrink-0">
                  {domain.domainName}
                </p>
                <a
                  href={`https://${domain.domainLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-64 text-blue-400 hover:underline break-all shrink-0"
                >
                  {domain.domainLink}
                </a>
                <p className="flex-1 text-gray-300 text-sm">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}