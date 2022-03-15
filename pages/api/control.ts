import type { NextApiRequest, NextApiResponse } from 'next';
import { commandMap, ExecCommand, execCommand, RequestCommand } from '../../lib/command';
import type { ExecResult } from '../../lib/command';
import invariant from 'tiny-invariant';

type RequestBody = {
  action: RequestCommand;
  target: RequestTarget;
};

enum RequestTarget {
  PLAYER = 'player',
  SYSTEM = 'system',
}

const isValidRequestBody = (requestBody: Partial<RequestBody>): boolean => {
  // This validation is annoying. This should happen automatically.
  // Time to rewrite in another framework.
  if (requestBody.action == null || requestBody.target == null) {
    return false;
  }

  const requestCommands = Object.values(RequestCommand);
  if (!requestCommands.includes(requestBody.action)) {
    return false;
  }

  const requestTargets = Object.values(RequestTarget);
  if (!requestTargets.includes(requestBody.target)) {
    return false;
  }

  return true;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExecResult | string>,
) {
  const params = req.query as RequestBody;
  invariant(isValidRequestBody(params), 'Request body is not valid.');

  const commandToExecute = commandMap.get(params.action);
  invariant(commandToExecute);

  const execResult = await execCommand(commandToExecute);
  res.status(200).json(execResult);
}
