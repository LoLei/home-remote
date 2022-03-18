import { ExecCommand, RequestCommand } from './types';

export const CommandMap: Map<RequestCommand, ExecCommand> = new Map([
  [RequestCommand.PLAYER_PLAY, ExecCommand.PLAYERCTL_PLAY],
  [RequestCommand.PLAYER_PAUSE, ExecCommand.PLAYERCTL_PAUSE],
  [RequestCommand.PLAYER_TOGGLE, ExecCommand.PLAYERCTL_TOGGLE],
  [RequestCommand.SYSTEM_VOL_INC, ExecCommand.PACTL_VOL_INC],
  [RequestCommand.SYSTEM_VOL_DEC, ExecCommand.PACTL_VOL_DEC],
]);
