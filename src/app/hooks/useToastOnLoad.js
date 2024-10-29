import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

const useToastOnLoad = (loading, data, message) => {
  // Ref to track if the toast has been shown
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!loading && data.length > 0 && !toastShownRef.current) {
      toast.success(message);
      toastShownRef.current = true; // Set the ref to true after showing the toast
    } else if (loading) {
      toastShownRef.current = false; // Reset the ref if loading starts again
    }
  }, [loading, data, message]);
};

export default useToastOnLoad;
