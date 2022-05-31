import  './HeadBtn.sass'


function HeadBtn(props) {
  return (
    <>
      <button className="header-btn-black">
        <img src={props.val} alt="" />
      </button>
    </>
  );
}

export default HeadBtn;
