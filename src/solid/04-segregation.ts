// Sin principio de segregación de interfaces
// interface Bird{
//     eat(): void;
//     run(): void;
//     fly(): void;
//     swim(): void;
// }

//Con principio de segregación de interfaces

interface Bird {
  eat(): void;
}

interface RunningBird {
  run(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimingBird {
  swim(): void;
}

class Tucan implements Bird, RunningBird {
  eat(): void {}
  run(): void {}
}

class HummingBird implements Bird, FlyingBird {
  eat(): void {}
  fly(): void {}
}

class Penguin implements Bird, SwimingBird {
  eat(): void {}
  swim(): void {}
}
