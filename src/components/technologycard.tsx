type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 min-h-[300px] flex flex-col shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-11 h-11 object-contain"
        />

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
        {technology.description}
      </p>

      <div className="mt-auto pt-5 flex justify-between text-xs text-gray-500">
        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className="brand-button mt-4 w-full py-2.5 rounded-md text-sm hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;