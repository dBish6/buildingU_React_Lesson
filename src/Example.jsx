import { useEffect } from "react";

export default function example({ show }) {
  // const clean = () => {

  // }

  useEffect(() => {
    console.log("HELLO FROM EXAMPLE", show) // Mount

    // return clean(); // This is not a clean up function.

    // return () => clean(); // This IS a clean up function.
    // return clean; // This IS a clean up function.
    return () => console.log("BYE FROM EXAMPLE") // This IS a clean up function. // Un-mount (cleanUp function)
  }, []);

  return <Another show={show} />;
}
