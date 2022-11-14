const ColorCircle = ({ selected, color, value, handleClick }) => {
  return (
    <div className="relative">
      <div
        className={` w-8 h-8 rounded-full cursor-pointer absolute`}
        style={{
          background: color,
          border: selected === value[0] ? `solid 2px ${color}` : 'none',
        }}
        onClick={() => {
          handleClick(value);
        }}
      ></div>
      <div
        className={` w-8 h-8 rounded-full cursor-pointer ${
          selected === value[0] ? 'animate-ping ' : ''
        }`}
        style={{
          background: color,
          border: selected === value[0] ? `solid 2px ${color}` : 'none',
        }}
      ></div>
    </div>
  );
};

export default ColorCircle;
