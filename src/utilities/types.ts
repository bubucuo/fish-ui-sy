/**
 * Return type for `React.forwardRef`, including inference of the proper typing for the ref.
 */
export type ForwardRefComponent<Props> = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<Element>
>;
