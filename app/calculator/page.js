import GpaCalculator from '../../components/GpaCalculator';
export const metadata = {
  title: 'SGPA to Percentage Calculator | MAKAUT Hub',
  description: 'Convert your MAKAUT SGPA to Percentage instantly using the official formula (SGPA - 0.75) * 10.',
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">SGPA to Percentage Calculator</h1>
      <GpaCalculator />
    </div>
  );
}