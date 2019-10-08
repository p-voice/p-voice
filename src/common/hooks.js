import React, { useEffect, useRef } from 'react';

export function useLifeCycle({ didMount, willUnmount, didUpdate, didMountAndWillUnmount = [] } = {}) {

  const initRef = useRef(true);

  useEffect(() => {

    didMount && didMount.call();
    didMountAndWillUnmount.forEach(item => item.didMount && item.didMount.call());

    return () => {
      willUnmount && willUnmount.call();
      didMountAndWillUnmount.forEach(item => item.willUnmount && item.willUnmount.call());
    };
  }, []);

  useEffect(() => {
    if (initRef.current) initRef.current = false;
    else didUpdate && !initRef.current && didUpdate.call();
  });
}

export function useInstanceVar(initialValue) {
  const instRef = useRef(initialValue);

  function setVal(val) {
    instRef.current = val;
  }

  return [ instRef.current, setVal ];
}
