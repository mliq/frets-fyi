import { INTERVAL_NAMES } from './intervals';

export const SCALES = [
  {
    name: 'major',
    label: 'Major',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MAJOR_SECOND,
      INTERVAL_NAMES.MAJOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MAJOR_SIXTH,
      INTERVAL_NAMES.MAJOR_SEVENTH,
    ],
  },
  {
    name: 'minor',
    label: 'Minor',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MAJOR_SECOND,
      INTERVAL_NAMES.MINOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MINOR_SIXTH,
      INTERVAL_NAMES.MINOR_SEVENTH,
    ],
  },
  {
    name: 'pentatonic_major',
    label: 'Pentatonic major',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MAJOR_SECOND,
      INTERVAL_NAMES.MAJOR_THIRD,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MAJOR_SIXTH,
    ],
  },
  {
    name: 'pentatonic_minor',
    label: 'Pentatonic minor',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MINOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MINOR_SEVENTH,
    ],
  },
  {
    name: 'melodic_minor',
    label: 'Melodic minor',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MAJOR_SECOND,
      INTERVAL_NAMES.MINOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MAJOR_SIXTH,
      INTERVAL_NAMES.MAJOR_SEVENTH,
    ],
  },
  {
    name: 'harmonic_minor',
    label: 'Harmonic minor',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MAJOR_SECOND,
      INTERVAL_NAMES.MINOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MINOR_SIXTH,
      INTERVAL_NAMES.MAJOR_SEVENTH,
    ],
  },
  {
    name: 'blues',
    label: 'Blues',
    intervals: [
      INTERVAL_NAMES.ROOT,
      INTERVAL_NAMES.MINOR_THIRD,
      INTERVAL_NAMES.PERFECT_FOURTH,
      INTERVAL_NAMES.DIMINISHED_FIFTH,
      INTERVAL_NAMES.PERFECT_FIFTH,
      INTERVAL_NAMES.MINOR_SEVENTH,
    ],
  },
];
