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

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length} Technology Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          <p>Your stack is empty.</p>

          <p className="text-sm mt-1">
            Add technologies from the list
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="border border-gray-200 rounded-lg p-3 flex items-center gap-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✕
              </button>

            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 w-full py-2 rounded-md border border-red-200 text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>

        </div>
      )}

    </div>
  );
};

export default YourStack;