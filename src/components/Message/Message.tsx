import "./Message.scss";

import Image from "../../assets/image/Valorant-Icon.png";

export default function Message() {
  return (
    <section className="page-layout">
      <div className="page-section">
        <img className="page-image" src={Image} />
        <h1 className="page-title">Valoreta</h1>
        <p className="page-description">
          Está com dúvida no que jogar? Clique no botão
        </p>
      </div>
    </section>
  );
}
