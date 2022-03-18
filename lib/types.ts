export type RequestBody = {
  action: RequestCommand;
};

type CommandOutput = {
  stdout?: string;
  stderr?: string;
};

export type ResponseBody = {
  commandOutput: CommandOutput;
  metaInfo: string;
};

export enum RequestCommand {
  PLAYER_PLAY = 'play',
  PLAYER_PAUSE = 'pause',
  PLAYER_TOGGLE = 'toggle',
  SYSTEM_VOL_INC = 'vol-inc',
  SYSTEM_VOL_DEC = 'vol-dec',
}

export enum ExecCommand {
  PLAYERCTL_PLAY = 'playerctl play',
  PLAYERCTL_PAUSE = 'playerctl pause',
  PLAYERCTL_TOGGLE = 'playerctl play-pause',
  // Future: next, position, ...
  PACTL_VOL_INC = 'pactl set-sink-volume 2 +5%',
  PACTL_VOL_DEC = 'pactl set-sink-volume 2 -5%',
}
