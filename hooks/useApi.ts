import { ResponseBody } from '../lib/types';

const useApi = () => {
  const basePath = '/api/control';

  const getFullPath = (route: string): string => {
    return `${basePath}/${route}`;
  };

  const request = async (route: string): Promise<ResponseBody> => {
    const requestResultResponse = await fetch(getFullPath(route));
    const requestResult = await requestResultResponse.json();
    console.log(`Request result for ${route}:`, requestResult);
    return requestResult;
  };

  const play = async (): Promise<ResponseBody> => {
    const playRequestResult = await request('play');
    return playRequestResult;
  };

  const pause = async (): Promise<ResponseBody> => {
    const pauseRequestResult = await request('pause');
    return pauseRequestResult;
  };

  const volInc = async (): Promise<ResponseBody> => {
    const volIncRequestResult = await request('vol-inc');
    return volIncRequestResult;
  };

  const volDec = async (): Promise<ResponseBody> => {
    const volDecRequestResult = await request('vol-dec');
    return volDecRequestResult;
  };

  return { play, pause, volInc, volDec } as const;
};

export default useApi;
