#day1

so in module js .. when we export as default we can import it by any name we want



File: math.js
const book = "Mathematics";

export default book;

Now, in another file:

File: student.js
import myBook from "./math.js";

console.log(myBook);

Output:
Mathematics

Notice something interesting!

When exporting, we called it book, but when importing, we called it myBook.

It still works! Why?

Because a default export doesn't require you to use the original variable name when importing it.

You could even write:
import anything from "./math.js";

It would still work! (Assuming the file has a default export.)

Think of it this way: The book is important, not the nickname you give it.