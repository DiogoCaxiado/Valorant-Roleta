import "./CardAgents.scss";

interface CardAgentsProps {
  agents: any
  randomAgent: any
  handleClickAgent: () => void
}

export default function CardAgents({ agents, randomAgent, handleClickAgent }: CardAgentsProps) {
  return (
    <section className="card">
      <div className="card-layout">
        {agents.map((agent) => {
          let variavel =
            randomAgent === agent.uuid
              ? "card-agent-random"
              : "card-agent-opacity";

          if (!randomAgent) {
            variavel = "card-agent";
          }

          return (
            <section
              key={agent.uuid}
              className={variavel}
              onClick={
                randomAgent === agent.uuid ? handleClickAgent : undefined
              }
            >
              <img src={agent.displayIcon} alt="icone do agente" />
            </section>
          );
        })}
      </div>
    </section>
  );
}
