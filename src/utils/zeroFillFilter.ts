export default function ZeroFillFilter(value: number): string {
  return (value < 10 && value > -1 ? '0' : '') + value;
}