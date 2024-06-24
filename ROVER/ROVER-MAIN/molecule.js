const video = document.createElement('video');
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          video.srcObject = stream;
          video.play();
        });

      const detectWaterMolecules = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const src = cv.matFromImageData(frame);
        const gray = new cv.Mat();
        const kernel = cv.Mat.ones(5, 5, cv.CV_8U);
        const dilate = new cv.Mat();

        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
        cv.threshold(gray, gray, 100, 255, cv.THRESH_BINARY);

        cv.dilate(gray, dilate, kernel);
        const contours = new cv.MatVector();
        const hierarchy = new cv.Mat();
        cv.findContours(dilate, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);

        for (let i = 0; i < contours.size(); i++) {
          const area = cv.contourArea(contours.get(i));
          if (area > 100 && area < 1000) {
            const rect = cv.boundingRect(contours.get(i));
            ctx.strokeStyle = 'green';
            console.log("H2o detected");
            ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
          }
        }
        const pH = 7.2;


        src.delete();
        gray.delete();
        kernel.delete();
        dilate.delete();
        contours.delete();
        hierarchy.delete();

        requestAnimationFrame(detectWaterMolecules);
      };

      video.addEventListener('play', () => {
        requestAnimationFrame(detectWaterMolecules);
      });

