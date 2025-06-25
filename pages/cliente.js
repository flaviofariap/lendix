
import { useState } from "react";
export default function Cliente() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => setEnviado(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white px-4">
      <div className="bg-white rounded-xl p-8 shadow-xl w-full max-w-md text-gray-800">
        {!enviado ? (
          <>
            <h2 className="text-xl font-bold mb-2">Solicite seu crédito</h2>
            <input className="border p-2 mb-2 w-full rounded" placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
            <input className="border p-2 mb-4 w-full rounded" placeholder="Data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} />
            <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Continuar</button>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Obrigado, {nome}!</h3>
            <p className="text-sm text-gray-600">Sua solicitação está em análise.</p>
          </div>
        )}
      </div>
    </div>
  );
}
