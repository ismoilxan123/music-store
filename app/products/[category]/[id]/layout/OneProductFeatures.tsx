import { oneProductType } from "@/app/lib/types";
import InBox from "../components/InBox";

const OneProductFeatures = ({ newArr }: { newArr: oneProductType[] }) => {
  return (
    <div className="container">
      {newArr.map((n, i) => (
        <div key={i} className="mb-40 one__product--feature">
          <div className="">
            <h1>FEATURES</h1>
            <p>{n.features.slice(0, 350)}</p>
            <br />
            <p>{n.features.slice(350)}</p>
          </div>
          <div>
            <h1>in the box</h1>
            <div>
              <InBox inbox={n.includes} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneProductFeatures;
