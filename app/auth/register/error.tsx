"use client";

import { useEffect, useState } from "react";

export default function RegisterError({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);


  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.message);

    setErrorMessage(error.message)
  }, [error]);

  return (
    <div>
      <h1>Register Error : {errorMessage}  </h1>
    </div>
  );
}
