interface DomainElement {
    domainName: string;
    domainLink: string;
    description: string;
}

export default function DomainLinkElement({domainName, domainLink, description}: DomainElement) {
    const fullURL = `https://${domainLink}`
    return (
      <div className="flex flex-row gap-3">
        <p className="w-32">{domainName}</p>
        <a href={fullURL} target="_blank" rel="noopener noreferrer" className="w-48 hover:underline">{domainLink}</a>
        <p className="w-48">{description}</p>
      </div>  
    );
}