import "./PortraitAgent.scss";

interface BackgroundAgent {
  getAgentData: any
  getAgentClass: any
}

export default function BackgroundAgent({ getAgentData, getAgentClass }: BackgroundAgent) {
  return (
    <section className="class-agent">
      <div className="class-border">
        <img
          className="class-icon"
          alt="agent class"
          src={getAgentData("background")}
        />
      </div>
      <img
        className={"class-agent-body"}
        src={getAgentData("fullPortrait")}
        alt="agent photo"
      />
    </section>
  );
}
