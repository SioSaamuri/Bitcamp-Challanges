function reverse(boolean) {
  if (typeof boolean === "boolean") {
    return !boolean;
  } else {
    console.log("Boolean expected");
  }
}
