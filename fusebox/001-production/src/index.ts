console.log(1);
if (process.env.NODE_ENV === "production") {
  console.log("production");
} else {
  console.log("development");
}
console.log(2);