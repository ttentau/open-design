import {fontSize, fontWeight} from "./constant";

export enum RectType {
  LINE = 0,
  FILL = 1,
  WRAPPER = 2,
  SELECT = 3,
  TEXT = 4,
}

export interface Rect extends RectText {
  id: number | string,
  name?: number | string,
  x: number,
  y: number,
  w: number,
  h: number,
  rotate: number,
  lineWidth: number,
  type: RectType,
  color: string,
  leftX?: number,
  topY?: number,
  rightX?: number,
  bottomY?: number,
  children: Rect[],
  flipVertical?: boolean,
  flipHorizontal?: boolean,
}

export enum RectTextMode {
  AUTO_W = 1,
  AUTO_H = 2,
  FIXED = 3,
}

export interface RectText {
  texts: string[],
  lineHeight: number,
  letterSpacing: number,
  fixedWH: boolean,
  rectTextMode: RectTextMode,
  fontFamily: number,
  fontWeight: number,
  fontSize: number,
}