export const DolphinLogo = ({ className = "w-10 h-10" }) => (
  <img 
    src={process.env.PUBLIC_URL + "/images/delfin2.png"} 
    alt="Delfín Impo Escobedo" 
    className={`${className} object-contain`}
  />
);
