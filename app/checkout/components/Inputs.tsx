const Inputs = ({ name, plcholder }: { name: string; plcholder: string }) => {
  return (
    <form className="w-full">
      <h3>{name}</h3>
      <input className="w-full" type="text" placeholder={plcholder} required />
    </form>
  );
};

export default Inputs;
