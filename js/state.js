const WORK_TIME = 50;
const BREAK_TIME = 10;
const RELAX_TIME = 25;

export const state = {
  work: WORK_TIME,
  break: BREAK_TIME,
  relax: RELAX_TIME,
  status: 'work',
  count: 4,
  timeLeft: WORK_TIME * 60,
  isActive: false,
  timerId: 0,
};
