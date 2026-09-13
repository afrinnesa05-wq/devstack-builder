import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologylist from "./components/technologylist";
import YourStack from "./components/YourStack";
import Footer from "./components/footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${technology?.name} removed from your stack!`);
  };

  const removeAll = () => {
    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <>
      <Nav />

      <Hero />

      {loading ? (
        <div className="text-center py-20">
          <span className="loading loading-spinner loading-lg"></span>

          <p className="mt-3 text-gray-500">
            Loading technologies...
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-5 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3">
              <Technologylist
                technologies={technologies}
                stack={stack}
                onAdd={addToStack}
              />
            </div>

            <div>
              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>

          </div>
        </div>
      )}

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;