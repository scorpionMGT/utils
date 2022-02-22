const maoguotao = 'test';

export interface Args {
   date: string | null
}
const getDate = (args: Args) => {
  if (args.date) return Date.now();
  return null;
};

export {
  maoguotao,
  getDate,
};
