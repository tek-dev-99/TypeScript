// Enum

enum Weekdays {
  Monday =0,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday = Weekdays.Monday - 1
}
console.log(Weekdays.Monday); // 0