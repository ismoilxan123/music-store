const Inputs = ({ name, plcholder }: { name: string; plcholder: string }) => {
  return (
    <form>
      <h3>{name}</h3>
      <input type="text" placeholder={plcholder} required />
    </form>
  );
};

export default Inputs;
