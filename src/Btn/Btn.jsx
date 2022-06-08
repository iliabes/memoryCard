import  './Btn.sass'


function HeadBtn(props) {
  return (
    <>
      <a href={props.link} className="header-btn-black">
        <img src={props.val} alt="" />
      </a>
    </>
  );
}

export default HeadBtn;
