// src/pages/calculate.tsx
import React, { useState } from "react";
import Table from "../components/table";
import { searchForFretMap, type FretData } from "../service/fretService";

const Calculate = () => {
  const [scaleValue, setScaleValue] = useState<string>("");
  const [fretsValue, setFretsValue] = useState<string>("");
  const [fretMap, setFretMap] = useState<FretData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Limpa erros anteriores

    const scaleNum = parseFloat(scaleValue);
    const fretsNum = parseInt(fretsValue, 10);

    // Validação rígida no JavaScript
    if (isNaN(scaleNum) || scaleNum <= 0) {
      setErrorMessage("A escala do instrumento deve ser maior que 0 mm.");
      return;
    }

    if (isNaN(fretsNum) || fretsNum < 22 || fretsNum > 26) {
      setErrorMessage("A quantidade de trastes permitida é apenas entre 22 e 26.");
      return;
    }

    setLoading(true);
    const data = await searchForFretMap(scaleNum, fretsNum);
    setFretMap(data);
    setLoading(false);
  };

  return (
    <section className="my-10 flex flex-col items-center gap-6 px-4">
      
      {/* Formulário de entrada */}
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-wrap items-end gap-4 p-6 rounded-xl border border-[#3a2f28] bg-[#231912] w-full max-w-4xl"
      >
        {/* Input da Escala */}
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <label className="text-[#e5b842] font-sans text-xs font-bold uppercase tracking-wider">
            Comprimento da Escala (mm)
          </label>
          <input
            type="number"
            step="any"
            min="100" // Impede 0 ou negativos direto no navegador
            value={scaleValue}
            onChange={(e) => setScaleValue(e.target.value)}
            className="p-3 rounded-lg bg-[#1a110b] border border-[#3a2f28] text-[#dfcbb5] focus:outline-none focus:border-[#e5b842]"
            placeholder="Ex: 650"
            required
          />
        </div>

        {/* Input dos Trastes */}
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <label className="text-[#e5b842] font-sans text-xs font-bold uppercase tracking-wider">
            Quantidade de Trastes (22 - 26)
          </label>
          <input
            type="number"
            min="22" // Trava mínima no navegador
            max="26" // Trava máxima no navegador
            value={fretsValue}
            onChange={(e) => setFretsValue(e.target.value)}
            placeholder="Ex: 25"
            className="p-3 rounded-lg bg-[#1a110b] border border-[#3a2f28] text-[#dfcbb5] focus:outline-none focus:border-[#e5b842]"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[#0b291b] hover:bg-[#12422c] text-[#e5b842] font-bold font-sans rounded-lg transition-colors min-w-[140px]"
        >
          {loading ? "Processando..." : "Calcular"}
        </button>
      </form>

      {/* Caixa de alerta caso o usuário tente burlar o formulário */}
      {errorMessage && (
        <div className="w-full max-w-4xl p-3 rounded-lg bg-[#7f1d1d] border border-red-700 text-red-200 text-sm font-sans">
          ⚠️ {errorMessage}
        </div>
      )}

      {/* Exibição da Tabela */}
      <div className="w-full max-w-4xl p-4 rounded-xl border border-[#3a2f28] bg-[#231912]">
        {fretMap.length > 0 ? (
          <Table fretMap={fretMap} />
        ) : (
          <p className="text-center text-[#dfcbb5] font-sans italic p-4">
            Defina a escala e o número de trastes acima para gerar a tabela de luthieria.
          </p>
        )}
      </div>
    </section>
  );
};

export default Calculate;