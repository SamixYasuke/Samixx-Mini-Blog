const resizeAndConvertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const maxWidth = 650;
          const maxHeight = 650;
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
  
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
  
          canvas.toBlob(
            (blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve(reader.result.split(",")[1]);
              };
              reader.readAsDataURL(blob);
            },
            "image/jpeg",
            0.8
          );
        };
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
};

export default resizeAndConvertToBase64;
