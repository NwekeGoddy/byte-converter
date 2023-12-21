import React, { useEffect, useState } from "react";

const ByteConverter = () => {
  const [bytes, setBytes] = useState("");
  const [result, setResult] = useState("");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 360);
    }, 60000); // Rotate every 1 minute (60,000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  const convertBytes = () => {
    const byteValue = parseFloat(bytes);
    if (!isNaN(byteValue)) {
      setResult({
        KB: (byteValue / 1024).toFixed(2),
        MB: (byteValue / 1024 / 1024).toFixed(2),
        GB: (byteValue / 1024 / 1024 / 1024).toFixed(2),
      });
    } else {
      setResult("Invalid input. Please enter a valid number.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-row justify-between items-center">
        <img
          src="/MCOM-Primary-logo.png"
          alt=""
          className="h-12 text-red-500"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: "transform 1.8s ease-in-out",
          }}
        />
        <h1 className="text-lg md:text-2xl font-bold">Byte Converter</h1>
      </div>

      <div className="mt-12 flex flex-row gap-4 items-center">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter Bytes"
          value={bytes}
          onChange={(e) => setBytes(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-[#ff2e00] hover:from-[#ff8b05] via-orange-600 hover:via-orange-600 to-[#ff8b05] hover:to-[#ff2e00] text-white px-4 py-2 rounded transform hover:scale-110 transition-all duration-300"
          onClick={convertBytes}
        >
          Convert
        </button>
      </div>

      <div className="mt-8">
        {typeof result === "string" ? (
          <p className="text-red-500">{result}</p>
        ) : (
          <ul className="flex flex-col gap-4 ">
            <li>
              KiloByte - KB: <span className="font-bold text-2xl">{` ${result.KB} KB`}</span>{" "}
            </li>
            <li>
              MegaByte - MB: <span className="font-bold text-2xl"> {` ${result.MB} MB`}</span>
            </li>
            <li>
              GigaByte - GB: <span className="font-bold text-2xl">{` ${result.GB} GB`}</span>{" "}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ByteConverter;
