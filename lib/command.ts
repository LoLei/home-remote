import invariant from 'tiny-invariant';
import util from 'util';
import { ExecCommand, ExecResult } from './types';

const exec = util.promisify(require('child_process').exec);

export async function execCommand(commandToExecute: ExecCommand): Promise<ExecResult> {
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
