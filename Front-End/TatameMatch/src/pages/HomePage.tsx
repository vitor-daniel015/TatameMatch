import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function HomePage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
      <h2 className="text-3xl font-black text-slate-800 mb-4">Bem-vindo ao TatameMatch</h2>
      <p className="text-slate-600">O Tailwind v4 e o React Router estão configurados e prontos para a luta!</p>
      <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
        Procurar Lutas
      </button>
        
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
    </div>
  );
}