class Iphone4 {
    constructor(ASIN, color, display, camera, bluetooth) {
      this.ASIN = ASIN;
      this.color = color;
      this.display = display;
      this.camera = camera;
      this.bluetooth = bluetooth;
    }
  
    dial() {
      return "tring.. tring...";
    }
  
    sendMessage() {
      return "Sending message...";
    }
  
    cameraClick() {
      return "Camera clicked";
    }
  
    connectBluetooth() {
      return "Bluetooth connected successfully...";
    }
  }
  
  let i4 = new Iphone4(1, "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
  
  // Properties
  console.log(i4.ASIN); // 1
  console.log(i4.color); // "Gray"
  console.log(i4.display); // 7.8
  console.log(i4.camera); // "2.0 MP"
  console.log(i4.bluetooth); // "Bluetooth 5.1"
  
  // Methods
  console.log(i4.dial()); // "tring.. tring..."
  console.log(i4.sendMessage()); // "Sending message..."
  console.log(i4.cameraClick()); // "Camera clicked"
  console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
  