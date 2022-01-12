import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Hyung Jun Kim</span>
      </h1>
      <p className={headerStyles.description}>
        Aspiring developer, trying music and game
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
