import { IPeople } from "../interfaces/IPeople.model";
const CardPeople = ({ people }: { people: IPeople }) => {
  return (
    <div className="cursor-pointer">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md ">
        <div className="text-xl font-bold">{people.name}</div>
        <div>{people.eye_color}</div>
        <div className="text-xs text-gray-400">{people.mass}</div>
      </div>
    </div>
  );
};

export default CardPeople;
