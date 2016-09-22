export const MODE = {
  MULTIPLAYER: 'MULTIPLAYER',
  SINGLEPLAYER: 'SINGLEPLAYER',
};

export const STATE = {
  PRELOADER: 'PRELOADER',
  MODE_SELECTION: 'MODE_SELECTION',
  ROOM_URL_DISPLAY: 'ROOM_URL_DISPLAY',
  PLAYING: 'PLAYING',
};

export const EVENT = {
  OPPONENT_CONNECTED: 'OPPONENT_CONNECTED',
  PRESET_CHANGED: 'PRESET_CHANGED',
};

export const ACTION = {
  MOVE: 'M',
  HIT: 'H',
  MISS: 'I',
};

export const PRESET = {
  INSANE: 'INSANE',
  NORMAL: 'NORMAL',
  PINGPONG: 'PINGPONG',
};

export const INITIAL_CONFIG = {
  mode: MODE.SINGLEPLAYER,
  preset: PRESET.NORMAL,
  gravity: 0,
  netHeight: 0.15,
  netThickness: 0.02,
  boxWidth: 3,
  boxDepth: 5,
  boxHeight: 2,
  boxPositionZ: -3.5,
  paddleThickness: 0.04,
  paddleSize: 0.5,
  paddlePositionZ: -1,
  ballRadius: 0.03,
  ballMass: 0.001,
  ballPaddleFriction: 0.8,
  ballPaddleBounciness: 1,
  ballBoxBounciness: 1,
  ballInitVelocity: 1,
  paddleModel: 'box',
  cameraHeight: 1,

  ROOM_CODE_LENGTH: 6,

  colors: {
    BLACK: 0x000000,
    WHITE: 0xFFFFFF,
  },
};
