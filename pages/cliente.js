import { useState } from "react";

export default function Cliente() {
  const [etapa, setEtapa] = useState("inicio");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 text-gray-900">
        <h1 className="text-2xl font-bold text-center mb-2">[Marca do Cliente]</h1>
        <p className="text-center mb-6 text-sm">Solicite seu crédito com segurança e agilidade.</p>

        {etapa === "inicio" && (
          <form onSubmit={(e) => { e.preventDefault(); setEtapa("confirmacao"); }} className="space-y-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full p-2 border rounded"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CPF"
              className="w-full p-2 border rounded"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Data de nascimento"
              className="w-full p-2 border rounded"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              required
            />
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Continuar</button>
          </form>
        )}

        {etapa === "confirmacao" && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Obrigado, {nome}!</h2>
            <p className="text-sm text-gray-600">Recebemos sua solicitação e estamos analisando seus dados.</p>
          </div>
        )}
      </div>
    </main>
  );
}
