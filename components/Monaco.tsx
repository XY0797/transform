import React from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Pane, Spinner } from "evergreen-ui";

loader.config({
  paths: {
    vs: './static/min/vs', // 替换CDN：https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs/
  },
  'vs/nls': {
    availableLanguages: {
      '*': 'zh-cn',
    },
  },
});

export function processSize(size) {
  return !/^\d+$/.test(size) ? size : `${size}px`;
}

interface MonacoProps {
  theme?: string;
  language?: string;
  value?: string;
  width?: number | string;
  height?: number | string;
  options?: any;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const Monaco: React.FC<MonacoProps> = ({
  language,
  value,
  defaultValue,
  height,
  width,
  options,
  onChange
}) => {
  return (
    <Editor
      defaultLanguage={language}
      defaultValue={defaultValue}
      value={value}
      height={height}
      width={width}
      options={options}
      onChange={onChange}
      loading={
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={400}
          flex={1}
        >
          <Spinner />
        </Pane>
      }
    />
  );
};

export default Monaco;
