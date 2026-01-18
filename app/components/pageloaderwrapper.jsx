"use client";

import { useEffect, useState } from "react";
import Loader from "../loader/page";

export default function PageLoaderWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate initial loading (logo animation time)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200); // match your loader animation duration

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return children;
}
