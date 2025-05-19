import { Link, type LinkProps } from "react-router-dom";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type SharedProps = PropsWithChildren<{
  textOnly?: boolean;
}>;

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  SharedProps & {
    to?: never;
  };

type AnchorProps = LinkProps &
  SharedProps & {
    to?: string;
  };

function isRouterLink(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
