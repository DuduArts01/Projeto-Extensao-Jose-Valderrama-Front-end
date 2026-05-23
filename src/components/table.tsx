import type { FretData } from '../service/fretService';

interface TableFretProps{
    fretMap: FretData[];
};

const Table = ({ fretMap }: TableFretProps) => {
    return(
        <table className="w-full border-collapse text-left font-sans text-[#dfcbb5]"> {/* Table */}
            <thead className="bg-[#0b291b] text-[#e5b842] text-sm uppercase tracking-wider "> {/* Header */}
                <tr> {/* Table Row */}
                    <th className="p-4 border-b border-[#3a2f28]">Traste</th> {/* Table Header, we use to Title header*/}
                    <th className="p-4 border-b border-[#3a2f28]">Distância da Pestana(mm)</th>
                    <th className="p-4 border-b border-[#3a2f28]">Tamanho do Traste(mm)</th>
                    <th className="p-4 border-b border-[#3a2f28]">Distância da Ponte(mm)</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-[#3a2f28] text-base">
                {fretMap.map((item) => (
                <tr key={item.traste} className="hover:bg-[#2d221a] transition-colors">
                    <td className="p-4 font-bold text-[#e5b842]">{item.traste}</td>
                    <td className="p-4 text-[#dfcbb5]">{item.distancia_pestana.toFixed(2)}</td>
                    <td className="p-4 text-[#dfcbb5]">{item.tamanho_traste.toFixed(2)}</td> {/* Adicionado toFixed(2) aqui também para arredondar */}
                    <td className="p-4 text-[#dfcbb5]">{item.distancia_ponte.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            
        </table>
    );
};

export default Table;
