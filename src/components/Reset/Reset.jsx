import "./Reset.scss";
import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";
import { MdLoop } from "react-icons/md";

const Reset = () => {
  const { resetVotes, totalVotes } = useContext(VoteContext);

  const handleReset = () => {
    if (
      totalVotes > 0 &&
      window.confirm("Sayilari sifirlamak istediginize emin misiniz?")
    ) {
      resetVotes();
    }
  };

  return (
    <section className="reset__container">
      <div className="reset__back">
        <button onClick={handleReset} className="reset__button">
          Baştan Say
          <span>
            <MdLoop />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Reset;
