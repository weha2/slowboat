declare global {
  interface Number {
    toCurrency(): string;
  }
}

Number.prototype.toCurrency = function (): string {
  return this.valueOf().toLocaleString("th-Th", { minimumFractionDigits: 2 });
};

export { };
