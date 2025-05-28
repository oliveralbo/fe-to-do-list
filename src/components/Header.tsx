export const Header = () => {
  const img =
    "https://static.wixstatic.com/media/77d9b2_0db3e342eebe405a8f1516c908ef6066~mv2.png/v1/fill/w_285,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_master_invertido.png";

  return (
    <div className="sticky top-0 left-0 p-4 border-b border-black bg-blue-950 shadow-2xl">
      <div className="flex justify-between items-center">
        <img src={img} alt="TICMAS" width={200} />
        <span className="text-4xl text-white">TO-DO-LIST </span>
      </div>
    </div>
  );
};
