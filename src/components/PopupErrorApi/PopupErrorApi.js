import "./PopupErrorApi.css";

const PopupErrorApi = ({ textError }) => {
  return (
    <div className="popup">
      <div className="popup__container">
        <p className="popup__text-error">{textError}</p>
        <button className="popup__close" type="button" />
      </div>
    </div>
  );
};

export default PopupErrorApi;