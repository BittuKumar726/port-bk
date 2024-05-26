const Preloader = (props: any) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
