import { Children, isValidElement, ReactNode } from "react";

export function cx(
  ...classNames: Array<string | number | boolean | undefined | null>
) {
  return classNames.filter(Boolean).join(" ");
}

export function capitalize(value: string) {
  if (typeof value !== "string") return "";
  if (value === "contentTypeName") return "Content Type";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getFirstChildPropValue(
  children: ReactNode,
  propNameCb: (props: any) => string
): string | string[] | undefined {
  let propValue = undefined;

  Children.forEach(children, (element) => {
    if (!isValidElement(element)) return;
    const propName = propNameCb(element.props);
    if (propName in element.props) {
      propValue = element.props[propName];
      return;
    }
  });

  return propValue;
}

export function useQuery() {
  const url = new URLSearchParams(document.location.search);
  const query = url.get("query");
  return query;
}

export function truncateText(
  text: string | undefined,
  maxWords: number
): string {
  const words = text!.split(" ");
  if (words.length > maxWords) {
    const truncated = words.slice(0, maxWords).join(" ");
    return truncated + "...";
  }
  return text!;
}

export const debounce = (fn: (...args: any) => void) => {
  let timerId: number;
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), 2000);
  };
};
