import { useCallback, useState } from "react";
import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST;

export function usePost() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<number>(0);

  const postData = useCallback(async function (endpoint: string, body: any) {
    setIsLoading(true);
    setRequestStatus(0);
    const url = `${HOST}/${endpoint}`
    const { status } = await axios({
      url,
      data: body,
      method: "post"
    });
    setRequestStatus(status);
    setIsLoading(false);
  }, []);

  return { postData, isLoading, status: requestStatus };
}
