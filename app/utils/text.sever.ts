import { marked } from "marked";

export const decodeFromBase64 = (encodedString: string): string => {
  const buff = Buffer.from(encodedString, "base64");
  return buff.toString("ascii");
};

export const encodeToBase64 = (text: string): string => {
  const buff = Buffer.from(text);
  return buff.toString("base64");
};

export const markDownToHtml = (mdText: string): string => {
  return marked(mdText);
};
