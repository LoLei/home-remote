import type { NextApiRequest, NextApiResponse } from 'next';
import invariant from 'tiny-invariant';
import { execCommand } from '../../../lib/command';
import { CommandMap } from '../../../lib/consts';
import { ExecResult, RequestBody, RequestCommand } from '../../../lib/types';

const isValidRequestBody = (requestBody: Partial<RequestBody>): boolean => {
  // This validation is annoying. This should happen automatically.
  // Time to rewrite in another framework.
  if (requestBody.action == null) {
    return false;
  }

  const requestCommands = Object.values(RequestCommand);
  if (!requestCommands.includes(requestBody.action)) {
    return false;
  }

  return true;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ExecResult>) {
  const params = req.query as RequestBody;
  invariant(isValidRequestBody(params), 'Request body is not valid.');

  const commandToExecute = CommandMap.get(params.action);
  invariant(commandToExecute);

  const execResult = await execCommand(commandToExecute);
  res.status(200).json(execResult);
}
