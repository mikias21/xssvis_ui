import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Service
import constants from "../../utils/constants";
import { evaluate } from "../../services/detector";

const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

const override = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5rem",
  // alignItems: "center",
  // justifyContent: "center",
};

const InputBox = () => {
  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState("");
  const [verdict, setVerdict] = useState("");
  const [malicious, setMalicious] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    evaluate(url)
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          if (res.data?.prediction === "1") {
            setMalicious(true);
            setVerdict(
              "Seems like your input is malicious, might be XSS payload injected."
            );
            setImageName(res.data?.generated_image);
            console.log(imageName);
          } else {
            setMalicious(false);
            setVerdict(
              "Your input is free from XSS payload, feel free to explore it."
            );
          }
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(imageName);
  console.log(API);

  return (
    <div className="p-4 sm:p-7">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col lg:w-9/12 lg:mx-auto">
          <label htmlFor="url" className="text-sm font-poppins">
            URL to evaluate
          </label>
          <input
            type="text"
            id="url"
            placeholder="peaste URL here"
            className="text-sm border border-slate-200 rounded-lg p-3 mt-3 font-poppins outline-none"
            onChange={(e) => setURL(e.target.value)}
            required
          />
        </div>
        <div className="w-56 mx-auto">
          <button
            type="submit"
            className="mt-5 bg-blue-700 text-white p-3 rounded-md w-full font-poppins"
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader
                color="#fffff"
                loading={isLoading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Evaluate"
            )}
          </button>
        </div>
      </form>

      <div className="p-4 mt-7 border border-slate-100 rounded shadow-lg md:w-9/12 mx-auto">
        <p className="text-xl font-poppins font-light">Evaluation Result</p>
        {isLoading ? (
          <ClipLoader
            color="blue"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
          />
        ) : (
          <>
            <div className="mt-4">
              <p className="text-sm font-bold font-poppins">
                {imageName && "Generated image from URL"}
              </p>
              {imageName && (
                <img
                  src={`${API}/images/${imageName}`}
                  alt="GEN_IMG"
                  className=""
                />
              )}
            </div>
            <div>
              <p className="text-sm font-bold font-poppins">
                {imageName && "Verdict"}
              </p>
              <p
                className={`text-xs font-bold font-poppins mt-4 ${
                  malicious ? "text-red-500" : "text-green-500"
                }`}
              >
                {verdict}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InputBox;
