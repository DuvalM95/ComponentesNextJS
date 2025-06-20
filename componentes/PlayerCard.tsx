type PlayerCardProps = {
  name: string;
  team: string;
  img: string;
};

export default function PlayerCard({ name, team, img }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={img} alt={name} className="w-24 h-24 rounded-full mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-blue-700">{team}</p>
    </div>
  );
}