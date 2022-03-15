import invariant from 'tiny-invariant';
import util from 'util';

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

export enum ExecCommand {
  PLAYERCTL_PLAY = 'playerctl play',
  PLAYERCTL_PAUSE = 'playerctl pause',
  PLAYERCTL_TOGGLE = 'playerctl play-pause',
  // Future: next, position, ...
  PACTL_VOL_INC = 'pactl set-sink-volume 2 +5%',
  PACTL_VOL_DEC = 'pactl set-sink-volume 2 -5%',
}

export enum RequestCommand {
  PLAYER_PLAY = 'play',
  PLAYER_PAUSE = 'pause',
  PLAYER_TOGGLE = 'toggle',
  SYSTEM_VOL_INC = 'vol-inc',
  SYSTEM_VOL_DEC = 'vol-dec',
}

export const commandMap: Map<RequestCommand, ExecCommand> = new Map([
  [RequestCommand.PLAYER_PLAY, ExecCommand.PLAYERCTL_PLAY],
  [RequestCommand.PLAYER_PAUSE, ExecCommand.PLAYERCTL_PAUSE],
  [RequestCommand.PLAYER_TOGGLE, ExecCommand.PLAYERCTL_TOGGLE],
  [RequestCommand.SYSTEM_VOL_INC, ExecCommand.PACTL_VOL_INC],
  [RequestCommand.SYSTEM_VOL_DEC, ExecCommand.PACTL_VOL_DEC],
]);

type CommandOutput = {
  stdout?: string;
  stderr?: string;
};

export type ExecResult = {
  commandOutput: CommandOutput;
  metaInfo: string;
};
