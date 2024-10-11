import "./CardAbilities.scss";

interface CardAbilitiesProps {
  name: string;
  src: string;
  alt: string; 
  handle: (arg: string) => void;
}

export default function CardAbilities({ name, src, alt, handle }: CardAbilitiesProps) {
  return (
    <section className="abilities-box" key={name}>
      <div className="abilities-name" onClick={() => handle(name)}>
        <strong className="abilities-strong">{name}</strong>
      </div>

      <img className="abilities-img" src={src} alt={alt} />
    </section>
  );
}
