import "./style.css";

export default function Header() {
  return (
    <div class="header-flex-container">
      <img
        class="avt"
        src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
        alt=""
      />
      <div>
        <div class="header-content">Pattie Trusdale</div>
        <div class="header-content-02">Full-stack Developer</div>
      </div>

      <button class="button-header">HIRE</button>
    </div>
  );
}
