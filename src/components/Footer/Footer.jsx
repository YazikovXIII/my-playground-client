import "./Footer.scss";

export const FooterComp = () => {
  return (
    <div className="footer_wrapper">
      <ul className="footer_list">
        <li>
          <a href="https://github.com/YazikovXIII" target="_blank" rel="noopener noreferrer">
            &lt;My GitHub/&gt;
          </a>
        </li>
        <div>|</div>
        <li>
          <a href="https://www.linkedin.com/in/vlad-yazikov-0575b727b/" target="_blank" rel="noopener noreferrer">
            &lt;My LinkedIn/&gt;
          </a>
        </li>
        <div>|</div>
        <li>
          <a
            href="https://drive.google.com/file/d/1hiulMyP_VFs3C97g4acplCB7HybEzfuR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;My CV/&gt;
          </a>
        </li>
      </ul>
    </div>
  );
};
