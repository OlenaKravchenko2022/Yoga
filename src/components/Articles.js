function Articles(props) {
  const definition = props.data;

  return (
    <>
      {definition.map((item, idx) => (
        <section key={idx}>
          <h2>{item.title}</h2>
          <div>
            <p>{item.body}</p>
          </div>
        </section>
      ))}
    </>
  );
}
export default Articles;
