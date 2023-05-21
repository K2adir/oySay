import "./Scores.scss";
import { RxCross1 } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxEnvelopeOpen } from "react-icons/rx";
import { HiOutlineCheck } from "react-icons/hi";

import { MdPeopleOutline } from "react-icons/md";
import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";
import { HiTemplate } from "react-icons/hi";

const Scores = () => {
  const { gecersizVotes, setGecersizVotes, totalVotes, validVotes } =
    useContext(VoteContext);

  return (
    <div className="dashboard__container">
      <div className="scores__container">
        <div className="scores__row">
          <div className="scores__icon">
            <RxCross1 />
          </div>
          <div className="scores__text">
            <h4>Geçersiz Oy</h4>
          </div>
          <div className="scores__result">
            <h4>{gecersizVotes}</h4>
          </div>
        </div>
        {/* /// */}
        {/* /// */}
        <div className="scores__row">
          <div className="scores__icon">
            <HiOutlineCheck />
          </div>
          <div className="scores__text">
            <h4>Geçerli Oy</h4>
          </div>
          <div className="scores__result">
            <h4>{validVotes}</h4>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="scores__row">
          <div className="scores__icon">
            <RxEnvelopeClosed />
          </div>
          <div className="scores__text">
            <h4>Toplam Oy</h4>
          </div>
          <div className="scores__result">
            <h4>{totalVotes}</h4>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* <div className="scores__row">
          <div className="scores__icon">
            <MdPeopleOutline />
          </div>
          <div className="scores__text">
            <h4>Seçmen Sayısı</h4>
          </div>
          <div className="scores__result">
            <h4>10</h4>
          </div>
        </div> */}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Scores;
