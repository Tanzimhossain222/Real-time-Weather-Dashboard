import heartLogo from "../../assets/heart.svg";

const Favourite = () => {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={heartLogo} alt="Favourite Locations" />
        <span>Favourite Locations</span>
      </div>
    </>
  );
};

export default Favourite;
