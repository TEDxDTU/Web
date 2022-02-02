const Box = (props) => {
  return (
    <>
      <div className="text-white text-7xl ml-28">
        {props.title}
        <img src="/Images/Logo-White-Text.svg" />
      </div>
      <div className="bg-box text-white p-10 rounded-xl m-10 mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        reprehenderit totam iste vel dignissimos, laudantium eum eligendi
        temporibus ea in quidem explicabo placeat aperiam eos doloribus a ad
        unde consequatur nam. Assumenda porro ullam consequuntur debitis natus
        nemo, tenetur accusamus quibusdam praesentium. Rerum distinctio debitis
        nisi nemo esse consequuntur provident vel quis modi placeat aliquam,
        assumenda, omnis obcaecati voluptas officiis ducimus quam accusamus iste
      </div>
    </>
  );
};

export default Box;
