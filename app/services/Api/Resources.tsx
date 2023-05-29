import {instance} from '@/services';
import {Resource} from '@/screens/resources/Resources.types';

type Response = {
  endpoint: string;
  elapsed_time: string;
};

interface ResponseType {
  resources: Resource[];
  response: Response;
}

export const getResources = (): Promise<any> => {
  const url = 'resources';
  const resp = instance.get(url);
  console.log({resp});
  return resp;
};
