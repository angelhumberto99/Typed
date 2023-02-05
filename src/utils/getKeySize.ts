const getKeySize = (key: string): string => {
  switch(key) {
    case "Backspace": case "rshift": case "CapsLock": return key;
    case " ": return "xl";
    case "lshift": case "isoretup": case "Tab": return "lg";
    default: return "normal";
  }
}

export default getKeySize