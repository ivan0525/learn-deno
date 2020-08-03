const filenames = Deno.args
console.log(filenames)
// for (const filename of filenames) {
//   const file = await Deno.open(filename);
//   await Deno.copy(file, Deno.stdout);
//   file.close();
// }