import React from "react";

type AIPickerProps = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: "logo" | "full") => void;
};

const AIPicker: React.FC<AIPickerProps> = ({}) => {
  return <div>AIPicker</div>;
};

export default AIPicker;
