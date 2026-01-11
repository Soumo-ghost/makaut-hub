import GpaCalculator from '../../components/GpaCalculator';

export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">SGPA to Percentage Calculator</h1>
      <GpaCalculator />
    </div>
  );
}