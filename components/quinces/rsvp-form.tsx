"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// CAMBIÁ EL NÚMERO ACÁ (Siempre sin el "+" y todo junto)
const PHONE_NUMBER = "543573459268";

// Interfaz para definir qué datos tiene un invitado
interface Guest {
  name: string;
  menu: string;
}

export default function RSVPForm() {
  const [guests, setGuests] = useState<Guest[]>([{ name: "", menu: "Ninguno" }]);
  const [guestCount, setGuestCount] = useState<number>(1);

  const ticketPrices = [
    { label: "Tarjeta Cena Mayores", price: "$60.000" },
    { label: "Adolescentes", price: "$45.000" },
    { label: "Menores (de 5 a 12 años)", price: "$30.000" },
    { label: "Brindis", price: "$20.000" },
  ];

  const handleCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value);
    setGuestCount(count);

    setGuests((prev) => {
      const newGuests = [...prev];
      if (count > prev.length) {
        for (let i = prev.length; i < count; i++) {
          newGuests.push({ name: "", menu: "Ninguno" });
        }
      } else {
        return newGuests.slice(0, count);
      }
      return newGuests;
    });
  };

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    const updatedGuests = [...guests];
    updatedGuests[index][field] = value;
    setGuests(updatedGuests);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missingNames = guests.some((guest) => !guest.name.trim());
    if (missingNames) {
      alert("Por favor, ingresá el nombre y apellido para todos los invitados.");
      return;
    }

    let messageBody = guests
      .map(
        (guest, index) =>
          `👤 *Nombre (Invitado ${index + 1}):* ${guest.name}\n🍽️ *Menú (Invitado ${
            index + 1
          }):* ${guest.menu}`
      )
      .join("\n\n");

    const finalMessage = `¡Hola! Confirmo mi asistencia a los 15 de Jazmín.\n\nCantidad de personas: ${guestCount}\n\n${messageBody}`;
    const encodedMessage = encodeURIComponent(finalMessage);

    window.open(
      `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen bg-[#f3f0ea] flex flex-col items-center justify-center p-6 font-sans text-[#222]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl text-center"
      >
        <h2 className="text-4xl font-serif mb-2 text-[#1a1a1a]">
          Confirmar Asistencia
        </h2>
        <p className="text-gray-500 text-sm tracking-wide mb-10">
          Por favor, confirmá tu presencia antes del 20 de junio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
          {ticketPrices.map((ticket, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-stone-200/60 rounded-xl p-4 flex justify-between items-center shadow-sm"
            >
              <span className="font-sans text-xs text-stone-600 font-light tracking-wide w-1/2">
                {ticket.label}
              </span>
              <span className="font-sans font-medium text-stone-900 text-base">
                {ticket.price}
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleWhatsAppSubmit}
          className="w-full max-w-md mx-auto text-left flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="font-sans text-[10px] tracking-widest uppercase text-stone-400 font-medium pl-1">
              CANTIDAD DE PERSONAS 
            </label>
            <div className="relative">
              <select
                value={guestCount}
                onChange={handleCountChange}
                className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-stone-400 font-sans text-sm transition-colors text-stone-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2378716c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65rem_auto] bg-[right_1.25rem_center] bg-no-repeat"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "persona" : "personas"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-8">
            {guests.map((guest, index) => (
              <div
                key={index}
                className="space-y-4 p-5 bg-white/50 border border-white/60 rounded-xl"
              >
                {guestCount > 1 && (
                  <h3 className="text-sm font-medium text-gray-700 border-b pb-2 mb-4">
                    Invitado {index + 1}
                  </h3>
                )}

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone-400 font-medium pl-1">
                    NOMBRE Y APELLIDO
                  </label>
                  <input
                    type="text"
                    value={guest.name}
                    onChange={(e) =>
                      updateGuest(index, "name", e.target.value)
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white/80 focus:outline-none focus:border-stone-400 font-sans text-sm transition-colors text-stone-800"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone-400 font-medium pl-1">
                    MENÚ ESPECIAL / RESTRICCIÓN
                  </label>
                  <div className="relative">
                    <select
                      value={guest.menu}
                      onChange={(e) =>
                        updateGuest(index, "menu", e.target.value)
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white/80 focus:outline-none focus:border-stone-400 font-sans text-sm transition-colors text-stone-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2378716c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65rem_auto] bg-[right_1.25rem_center] bg-no-repeat"
                    >
                      <option value="Ninguno">Ninguno</option>
                      <option value="Celíaco">Celíaco</option>
                      <option value="Vegetariano">Vegetariano</option>
                      <option value="Vegano">Vegano</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-sans text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            Confirmar por WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}