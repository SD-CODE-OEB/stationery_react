const Container = (props) => {
  return (
    <div
      className={props.className}
      style={{
        height: "calc(100vh - 80px - 60px)",
        width: "100%",
        padding: "0px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
