import * as React from "react";

/**
 * @internal
 */
export type UseControllableStateOptions<State> = {
  /**
   * User-provided default state or initializer, for uncontrolled usage.
   */
  defaultState?: State | (() => State);
  /**
   * User-provided controlled state. `undefined` means internal state will be used.
   */
  state: State | undefined;
  /**
   * Used as the initial state if `state` and `defaultState` are both `undefined`.
   * If `undefined` is the correct initial state, pass that here.
   */
  initialState: State;
};

function isFactoryDispatch<State>(
  newState: React.SetStateAction<State>
): newState is (prevState: State) => State {
  return typeof newState === "function";
}

// 受控以及非受控
export const useControllableState = <State>(
  options: UseControllableStateOptions<State>
): [State, React.Dispatch<React.SetStateAction<State>>] => {
  const [internalState, setInternalState] = React.useState<State>(() => {
    if (options.defaultState === undefined) {
      return options.initialState;
    }
    return isInitializer(options.defaultState)
      ? options.defaultState()
      : options.defaultState;
  });

  // ! 1.
  const stateValueRef = React.useRef<State | undefined>(options.state);

  React.useEffect(() => {
    stateValueRef.current = options.state;
  }, [options.state]);

  const setControlledState = React.useCallback(
    (newState: React.SetStateAction<State>) => {
      if (isFactoryDispatch(newState)) {
        newState(stateValueRef.current as State);
      }
    },
    []
  );
  // !-----

  // ! 2.
  // const setControlledState = React.useCallback(
  //   (newState: React.SetStateAction<State>) => {
  //     if (isFactoryDispatch(newState)) {
  //       newState(options.state as State);
  //     }
  //   },
  //   [options.state]
  // );
  // !-----

  return isControlled(options.state)
    ? [options.state, setControlledState] // 受控组件
    : [internalState, setInternalState]; // 非受控组件
};

function isInitializer<State>(
  value: State | (() => State)
): value is () => State {
  return typeof value === "function";
}

const isControlled = <V>(
  controlledValue: V | undefined
): controlledValue is V => {
  return controlledValue !== undefined;
};
