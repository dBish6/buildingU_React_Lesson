import { useEffect } from "react";

export default function Example({ show }) {
  // const clean = () => {

  // }

  useEffect(() => {
    console.log("HELLO FROM EXAMPLE", show); // Mount

    // return clean(); // This is not a clean up function.

    // return () => clean(); // This IS a clean up function.
    // return clean; // This IS a clean up function.
    return () => console.log("BYE FROM EXAMPLE"); // This IS a clean up function. // Un-mount (cleanUp function)
  }, []);

  // Example of a good cleanup 1.
  useEffect(() => {
    const handleResize = () => {
      // something when page is resizing.
    };

    document.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, []);

  // Example of a good cleanup 2.
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://yourbackend/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("whatever object"),
      signal: controller.signal,
    }).then((res) => {
      if (res.ok) {
        // do something
      }
    });

    return () => controller.abort();
  }, []);

  return <Another show={show} />;
}
