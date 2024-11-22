import * as React from "react";

type ContentType = {
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
};

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> &
  ContentType & {
    /**
     * 是否禁用输入框。
     */
    disabled?: boolean;

    /**
     * 类名。
     */
    className?: string;

    /** Input can't have children. */
    children?: never;

    htmlSize?: number;
    /**
     * Size of the input (changes the font size and spacing).
     * @default 'medium'
     */
    // This name overlaps with the native `size` prop, but that prop isn't very useful in practice
    // (we could add `htmlSize` for the native functionality if someone needs it)
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
    size?: "small" | "medium" | "large";

    /**
     * Controls the colors and borders of the input.
     * @default 'outline'
     */
    appearance?:
      | "outline"
      | "underline"
      | "filled-darker"
      | "filled-lighter"
      | "filled-darker-shadow"
      | "filled-lighter-shadow";

    /**
     * Default value of the input. Provide this if the input should be an uncontrolled component
     * which tracks its current state internally; otherwise, use `value`.
     *
     * (This prop is mutually exclusive with `value`.)
     */
    defaultValue?: string;

    /**
     * Current value of the input. Provide this if the input is a controlled component where you
     * are maintaining its current state; otherwise, use `defaultValue`.
     *
     * (This prop is mutually exclusive with `defaultValue`.)
     */
    value?: string;

    /**
     * Called when the user changes the input's value.
     */
    onChange?: (
      ev: React.ChangeEvent<HTMLInputElement>,
      data: InputOnChangeData
    ) => void;

    /**
     * An input can have different text-based [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types)
     * based on the type of value the user will enter.
     *
     * Note that no custom styling is currently applied for alternative types, and some types may
     * activate browser-default styling which does not match the Fish design language.
     *
     * (For non-text-based types such as `button` or `checkbox`, use the appropriate component or an
     * `<input>` element instead.)
     * @default 'text'
     */
    type?:
      | "text"
      | "email"
      | "password"
      | "search"
      | "tel"
      | "url"
      | "date"
      | "datetime-local"
      | "month"
      | "number"
      | "time"
      | "week";
  };

/**
 * Data passed to the `onChange` callback when a user changes the input's value.
 */
export type InputOnChangeData = {
  /** Updated input value from the user */
  value: string;
};
