import "./Scores.scss";
import { RxCross1 } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxEnvelopeOpen } from "react-icons/rx";
import { MdPeopleOutline } from "react-icons/md";
const Scores = () => {
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
            <h4>10</h4>
          </div>
        </div>
        {/* /// */}
        {/* /// */}
        <div className="scores__row">
          <div className="scores__icon">
            <RxEnvelopeOpen />
          </div>
          <div className="scores__text">
            <h4>Açılan Zarf</h4>
          </div>
          <div className="scores__result">
            <h4>10</h4>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="scores__row">
          <div className="scores__icon">
            <RxEnvelopeClosed />
          </div>
          <div className="scores__text">
            <h4>Sandıktan Çıkan Zarf</h4>
          </div>
          <div className="scores__result">
            <h4>10</h4>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="scores__row">
          <div className="scores__icon">
            <MdPeopleOutline />
          </div>
          <div className="scores__text">
            <h4>Seçmen Sayısı</h4>
          </div>
          <div className="scores__result">
            <h4>10</h4>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Scores;
