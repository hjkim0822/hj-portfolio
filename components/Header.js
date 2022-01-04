import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with shitty news
      </p>
    </div>
  );

  //   example when to use <style jsx> tag
  //   const x = 5;
  //   return (
  //     <div>
  //       <h1 className="title">
  //         <span>WebDev</span> News
  //       </h1>
  //       <style jsx>
  //         {`
  //           .title {
  //             color: ${x < 3 ? "red" : "blue"};
  //           }
  //         `}
  //       </style>
  //     </div>
  //   );
};

export default Header;
