import type { NextApiRequest, NextApiResponse } from 'next';
import { COMMANDS, execCommand } from '../../lib/command';
import type { ExecResult } from '../../lib/command';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExecResult | string>,
) {
  try {
    const execResult = await execCommand(COMMANDS.PLAYERCTL_TOGGLE);
    res.status(200).json(execResult);
  } catch (e: unknown) {
    console.error(e);
    res.status(500).send((e as Error).toString());
  }
}
