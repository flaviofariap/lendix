
export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Painel Administrativo - Lendix</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Volume Total</h2>
          <p className="text-2xl font-bold text-indigo-600">R$ 580.000</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Inadimplência</h2>
          <p className="text-2xl font-bold text-red-500">2,4%</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold text-gray-700">Contratos Ativos</h2>
          <p className="text-2xl font-bold text-green-600">125</p>
        </div>
      </div>
    </div>
  );
}
