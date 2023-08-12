const B64_convert = () => {
  const text = "1";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 30;
  canvas.height = 10;
  if (context) {
    context.font = "20px Arial";
    context.fillText(text, 50, 80);
  }
  const base64Image = canvas.toDataURL("image/png");
  return base64Image;
};
