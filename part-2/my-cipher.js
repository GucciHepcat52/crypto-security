const encode = (string) => {
  let stringLower = string.toLowerCase();
  let stringTrimmed = stringLower.split(/\s/).join("");
  console.log(stringTrimmed);
  let codedStringSplit = [];
  for (let i = 0; i < stringTrimmed.length; i++) {
    switch (stringTrimmed[i]) {
      case "i":
        codedStringSplit.push("12");
        break;
      case "l":
        codedStringSplit.push("15");
        break;
      case "o":
        codedStringSplit.push("18");
        break;
      case "v":
        codedStringSplit.push("25");
        break;
      case "e":
        codedStringSplit.push("8");
        break;
      case "c":
        codedStringSplit.push("6");
        break;
      case "r":
        codedStringSplit.push("21");
        break;
      case "y":
        codedStringSplit.push("28");
        break;
      case "p":
        codedStringSplit.push("19");
        break;
      case "t":
        codedStringSplit.push("23");
        break;
      case "g":
        codedStringSplit.push("10");
        break;
      default:
        return "Something went wrong";
    }
  }
  let codeJoined = codedStringSplit.join("");
  return codeJoined;
};

console.log(encode("I love cryptology"));
