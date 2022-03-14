import util from 'util';

const exec = util.promisify(require('child_process').exec);

export async function execCommand(commandToExecute: string): Promise<ExecResult> {
  if (!Object.values(COMMANDS).includes(commandToExecute)) {
    throw new Error(`Command ${commandToExecute} is not a valid command.`);
  }
  const { stdout, stderr } = await exec(commandToExecute);
  return {
    commandOutput: {
      stdout,
      stderr,
    },
    metaInfo: `Executed command ${commandToExecute}`,
  };
}

export const COMMANDS = {
  LS: 'ls', // For debugging
  PLAYERCTL_PLAY: 'playerctl play',
  PLAYERCTL_PAUSE: 'playerctl pause',
  PLAYERCTL_TOGGLE: 'playerctl play-pause',
  // Future: next, position, toggle...
  PACTL_VOL_INC: 'pactl set-sink-volume 2 +5%',
  PACTL_VOL_DEV: 'pactl set-sink-volume 2 -5%',
};

type CommandOutput = {
  stdout?: string;
  stderr?: string;
};

export type ExecResult = {
  commandOutput: CommandOutput;
  metaInfo: string;
};
