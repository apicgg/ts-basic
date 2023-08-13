class User {
  // private _courseCount = 1;
  protected _courseCount = 1;

  constructor(public name: string, private email: string) {
    this.name = name;
    this.email = email;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count can't be less than one!");
    }
    this._courseCount = courseNumber;
  }
}

class SubUser extends User {
  public isFamily = true;
  changeCourseCount() {
    this._courseCount = 2;
  }
}

const anurag = new User("anurag", "a@anuragp.dev");
const user = new SubUser("hello", "world");

console.log(user.courseCount);

// anurag.name;
