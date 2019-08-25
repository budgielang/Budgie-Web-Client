import React, { useState } from "react";
import { defaultSampleName, samples } from "./availableSamples";

import "./styles.css";

export type SampleChooserProps = {
  sampleNeeded?: boolean;
  setInput: (input: string) => void;
};

export const SampleChooser: React.FC<SampleChooserProps> = ({
  sampleNeeded = false,
  setInput
}) => {
  const [sampleName, setSampleName] = useState<keyof typeof samples>(
    defaultSampleName
  );

  const setNewSample = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSampleName = event.target.value as keyof typeof samples;
    setInput(samples[newSampleName]);
    setSampleName(newSampleName);
  };

  if (sampleNeeded) {
    setInput(samples[defaultSampleName]);
  }

  return (
    <div className="sample-chooser">
      <label className="non-mobile" id="choose-a-sample">
        Choose a sample:
      </label>
      <select
        aria-label="Choose a sample"
        aria-labelledby="choose-a-sample"
        className="sample-chooser--select"
        onChange={setNewSample}
        value={sampleName}
      >
        {Object.keys(samples).map(sampleName => (
          <option key={sampleName} value={sampleName}>
            {sampleName}
          </option>
        ))}
      </select>
      <button
        className="sample-chooser--reset"
        onClick={() => setInput(samples[defaultSampleName])}
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
