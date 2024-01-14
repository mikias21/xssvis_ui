const InputBox = () => {
  return (
    <div className="p-4 sm:p-7">
      <form action="">
        <div className="flex flex-col lg:w-9/12 lg:mx-auto">
          <label htmlFor="url" className="text-sm font-poppins">
            URL to evaluate
          </label>
          <input
            type="text"
            id="url"
            placeholder="peaste URL here"
            className="text-sm border border-slate-200 rounded-lg p-3 mt-3 font-poppins outline-none"
          />
        </div>
        <div className="w-56 mx-auto">
          <button
            type="submit"
            className="mt-5 bg-blue-700 text-white p-3 rounded-md w-full"
          >
            Evaluate
          </button>
        </div>
      </form>

      <div className="p-4 mt-7 border border-slate-100 rounded shadow-lg md:w-9/12 mx-auto">
        <p className="text-xl font-poppins font-light">Evaluation Result</p>
        <div className="mt-4">
          <p className="text-sm font-bold font-poppins">
            Generated image from URL
          </p>
          <img
            src="http://localhost:8000/images/a091f92c-dcc8-49eb-b961-b7b772ceeddb.png"
            alt="GEN_IMG"
            className=""
          />
        </div>
        <div>
          <p className="text-sm font-bold font-poppins">Verdict</p>
          <p className="text-xs font-bold font-poppins text-red-500 mt-2 mb-10">
            We have noticed some abnormalities, this url is malicious
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
