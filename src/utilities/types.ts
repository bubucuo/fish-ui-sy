/**
 * This is part of a hack to infer the element type from a native element *props* type.
 * The only place the original element is found in a native props type (at least that's workable
 * for inference) is in the event handlers, so some of the helper types use this event handler
 * name to infer the original element type.
 *
 * Notes:
 * - Using an extremely obscure event handler reduces the likelihood that its signature will be
 *   modified in any component's props.
 * - Inferring based on a single prop name instead of a larger type like `DOMAttributes<T>` should be
 *   less expensive for typescript to evaluate and is less likely to result in type expansion in .d.ts.
 */
type ObscureEventName = "onLostPointerCaptureCapture";

/**
 * Infers the element type from props that are declared using ComponentProps.
 */
export type InferredElementRefType<Props> = ObscureEventName extends keyof Props
  ? Required<Props>[ObscureEventName] extends React.PointerEventHandler<
      infer Element
    >
    ? Element
    : never
  : never;

/**
 * Return type for `React.forwardRef`, including inference of the proper typing for the ref.
 */
export type ForwardRefComponent<Props> = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<InferredElementRefType<Props>>
>;
