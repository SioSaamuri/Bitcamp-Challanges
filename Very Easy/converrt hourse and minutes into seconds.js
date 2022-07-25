function convert(hours, minutes) {
  let hoursConvert = hours * 60 * 60;
  let minutesConvert = minutes * 60;
  return hoursConvert + minutesConvert;
}

console.log(convert(24, 0));
