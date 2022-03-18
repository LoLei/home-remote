import { ResponseBody } from '../lib/types';

const useApi = () => {
  const basePath = '/api/control';

  const getFullPath = (route: string): string => {
    return `${basePath}/${route}`;
  };

  const request = async (route: string): Promise<ResponseBody> => {
    const requestResultResponse = await fetch(getFullPath(route));
    const requestResult = await requestResultResponse.json();
    return requestResult;
  };

  const play = async (): Promise<ResponseBody> => {
    const playRequestResult = await request('play');
    console.log({ playRequestResult });
    return playRequestResult;
  };

  const pause = async (): Promise<ResponseBody> => {
    const pauseRequestResult = await request('pause');
    console.log({ pauseRequestResult });
    return pauseRequestResult;
  };

  const volInc = async (): Promise<ResponseBody> => {
    const volIncRequestResult = await request('vol-inc');
    console.log({ volIncRequestResult });
    return volIncRequestResult;
  };

  const volDec = async (): Promise<ResponseBody> => {
    const volDecRequestResult = await request('vol-dec');
    console.log({ volDecRequestResult });
    return volDecRequestResult;
  };

  return { play, pause, volInc, volDec };
};

export default useApi;
