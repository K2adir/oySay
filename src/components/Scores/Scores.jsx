import "./Scores.scss";

const Scores = () => {
  return (
    <div className="dashboard__container">
      <div className="scores__container">
        <div className="scores__row">
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
