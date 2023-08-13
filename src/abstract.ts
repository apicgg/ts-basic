abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: boolean
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("test");
  }
}

// const ap = new TakePhoto("test", "test"); // not allowed
const ap2 = new Instagram("test", "test", true);

ap2.getReelTime();
