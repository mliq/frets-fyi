import { NOTE_NAMES } from './notes';

export const INTERVAL_NAMES = {
  ROOT: 'R',
  MINOR_SECOND: 'm2',
  MAJOR_SECOND: 'M2',
  MINOR_THIRD: 'm3',
  MAJOR_THIRD: 'M3',
  PERFECT_FOURTH: 'P4',
  DIMINISHED_FIFTH: 'd5',
  PERFECT_FIFTH: 'P5',
  MINOR_SIXTH: 'm6',
  MAJOR_SIXTH: 'M6',
  MINOR_SEVENTH: 'm7',
  MAJOR_SEVENTH: 'M7',
};

export const INTERVALS = [
  {
    name: INTERVAL_NAMES.ROOT,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.D_SHARP, },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.G_SHARP },
    ],
  },
  {
    name: INTERVAL_NAMES.MINOR_SECOND,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.A },
    ],
  },
  {
    name: INTERVAL_NAMES.MAJOR_SECOND,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.A_SHARP },
    ],
  },
  {
    name: INTERVAL_NAMES.MINOR_THIRD,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.B },
    ],
  },
  {
    name: INTERVAL_NAMES.MAJOR_THIRD,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.C },
    ],
  },
  {
    name: INTERVAL_NAMES.PERFECT_FOURTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.C_SHARP },
    ],
  },
  {
    name: INTERVAL_NAMES.DIMINISHED_FIFTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.D },
    ],
  },
  {
    name: INTERVAL_NAMES.PERFECT_FIFTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.D_SHARP },
    ],
  },
  {
    name: INTERVAL_NAMES.MINOR_SIXTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.E },
    ],
  },
  {
    name: INTERVAL_NAMES.MAJOR_SIXTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.F },
    ],
  },
  {
    name: INTERVAL_NAMES.MINOR_SEVENTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.G },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.F_SHARP },
    ],
  },
  {
    name: INTERVAL_NAMES.MAJOR_SEVENTH,
    notes: [
      { key: NOTE_NAMES.A, note: NOTE_NAMES.G_SHARP },
      { key: NOTE_NAMES.A_SHARP, note: NOTE_NAMES.A },
      { key: NOTE_NAMES.B, note: NOTE_NAMES.A_SHARP },
      { key: NOTE_NAMES.C, note: NOTE_NAMES.B },
      { key: NOTE_NAMES.C_SHARP, note: NOTE_NAMES.C },
      { key: NOTE_NAMES.D, note: NOTE_NAMES.C_SHARP },
      { key: NOTE_NAMES.D_SHARP, note: NOTE_NAMES.D },
      { key: NOTE_NAMES.E, note: NOTE_NAMES.D_SHARP },
      { key: NOTE_NAMES.F, note: NOTE_NAMES.E },
      { key: NOTE_NAMES.F_SHARP, note: NOTE_NAMES.F },
      { key: NOTE_NAMES.G, note: NOTE_NAMES.F_SHARP },
      { key: NOTE_NAMES.G_SHARP, note: NOTE_NAMES.G },
    ],
  },
];