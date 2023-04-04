import React from "react";

type TabProps = {
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab?: boolean;
  isActiveTab?: string;
  handleClick: () => void;
};

const Tab: React.FC<TabProps> = ({
  tab,
  isFilterTab,
  isActiveTab,
  handleClick,
}) => {
  return <div>Tab</div>;
};

export default Tab;
