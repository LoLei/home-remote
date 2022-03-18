import invariant from 'tiny-invariant';
import util from 'util';
import { ExecCommand, ResponseBody } from './types';

const exec = util.promisify(require('child_process').exec);

export async function execCommand(commandToExecute: ExecCommand): Promise<ResponseBody> {
  const execCommands = Object.values(ExecCommand);
  invariant(
    execCommands.includes(commandToExecute),
    `Command ${commandToExecute} is not a valid command`,
  );
  const { stdout, stderr } = await exec(commandToExecute);
  return {
    commandOutput: {
      stdout,
      stderr,
    },
    metaInfo: `Executed command ${commandToExecute}`,
  };
}
