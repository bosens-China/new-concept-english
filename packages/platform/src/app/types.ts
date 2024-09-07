import { volume1, volume2, volume3, volume4 } from '@boses/source';

export const Volumes = {
  '1': volume1,
  '2': volume2,
  '3': volume3,
  '4': volume4,
};

export type ValueOf<T> = T[keyof T];

export type Volume = keyof typeof Volumes;

export type VolumeAll = ValueOf<typeof Volumes>;

export interface Params {
  volume: Volume;
}
