import React from "react";
import CustomButton from "./CustomButton";

type AIPickerProps = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: "logo" | "full") => void;
};

const AIPicker: React.FC<AIPickerProps> = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}) => {
  return (
    <div className="apicker-container">
      <textarea
        placeholder="Ask AI ..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            handleClick={() => handleSubmit("logo")}
            customStyles="text-xs"
          />
        ) : (
          <CustomButton
            type="filled"
            title="AI Full"
            handleClick={() => handleSubmit("full")}
            customStyles="text-xs"
          />
        )}
      </div>
    </div>
  );
};

export default AIPicker;
