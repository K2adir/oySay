import "./Reset.scss";
import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";
import { MdLoop } from "react-icons/md";

const Reset = () => {
  const { resetVotes, totalVotes, sandikNo, okulAdi } = useContext(VoteContext);

  const handleReset = () => {
    if (
      totalVotes > 0 &&
      window.confirm("Sayıları sıfırlamak istediğinize emin misiniz?")
    ) {
      resetVotes();
      return;
    }
    if (
      (sandikNo.length > 0 || okulAdi.length > 0) &&
      window.confirm("Sayıları sıfırlamak istediğinize emin misiniz?")
    ) {
      resetVotes();
      return;
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
