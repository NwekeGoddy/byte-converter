import React, { useState } from "react";

const ByteConverter = () => {
  const [bytes, setBytes] = useState("");
  const [result, setResult] = useState("");

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
        <img src="/MCOM-Primary-logo.png" alt="" className="h-12" />
        <h1 className="text-3xl font-bold mb-4">Byte Converter</h1>
      </div>

      <div className="mt-12">
        <input
          type="text"
          className="border p-2 mb-4"
          placeholder="Enter Bytes"
          value={bytes}
          onChange={(e) => setBytes(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={convertBytes}
        >
          Convert
        </button>
      </div>

      <div className="mt-4">
        {typeof result === "string" ? (
          <p className="text-red-500">{result}</p>
        ) : (
          <ul>
            <li>{`KiloByte - KB: ${result.KB} KB`}</li>
            <li>{`MegaByte - MB: ${result.MB} MB`}</li>
            <li>{`GigaByte - GB: ${result.GB} GB`}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ByteConverter;
