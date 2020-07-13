export const FORMULAS = {
  // tslint:disable-next-line: only-arrow-functions
  AVERAGE: (function(): any {
    return {
      next: (list: number[]): number => {
        return list && list.length > 0 ?list.reduce((total, num) => total + num) / list.length : 0;
      }
    };
  }()),
  // tslint:disable-next-line: only-arrow-functions
  STANDARD_DEVIATION: (function(): any {
    return {
      next: (list: number[]): number => {
        if (list && list.length > 0) {
          const average = FORMULAS.AVERAGE.next(list);
          const sumList = list.map(el => Math.pow((el - average), 2));
          return Math.sqrt(sumList.reduce((tot, num) => tot + num) / list.length);
        }
        return 0;
      }
    };
  }())
};
