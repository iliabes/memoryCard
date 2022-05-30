import  './HeadBtn.sass'


function HeadBtn(props) {
  return (
    <>
      <div className="header-btn-black">
        <img src={props.val} alt="" />
      </div>
    </>
  );
}

export default HeadBtn;
